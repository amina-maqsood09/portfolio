import React, { Suspense, useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COLORS = ["#22C55E", "#4ADE80", "#16A34A"];

function makeCodeTexture(color: string): THREE.CanvasTexture {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = "#0A0F0C";
    ctx.fillRect(0, 0, 256, 256);

    const lineColors = ["#4ADE80", "#86EFAC", "#6B7280", color, "#9CA3AF"];
    let y = 18;
    const rng = (seed: number) => {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    };
    let seed = 1;
    while (y < 246) {
        const indent = Math.floor(rng(seed++) * 4) * 12;
        const width = 40 + rng(seed++) * 150;
        ctx.fillStyle = lineColors[Math.floor(rng(seed++) * lineColors.length)];
        ctx.globalAlpha = 0.55 + rng(seed++) * 0.35;
        ctx.fillRect(14 + indent, y, width, 6);
        y += 14;
    }
    ctx.globalAlpha = 1;

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
}

function TechShapes({ colorIndex }: { colorIndex: number }) {
    const groupRef = useRef<THREE.Group>(null);
    const cubeRef = useRef<THREE.Mesh>(null);
    const icoRef = useRef<THREE.LineSegments>(null);
    const mouse = useRef({ x: 0, y: 0 });
    const color = COLORS[colorIndex % COLORS.length];

    const codeTexture = useMemo(() => makeCodeTexture(color), [color]);

    const icoEdges = useMemo(() => {
        const geo = new THREE.IcosahedronGeometry(1, 0);
        return new THREE.EdgesGeometry(geo);
    }, []);

    useEffect(() => {
        const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        if (!canHover) return;
        function handlePointerMove(e: PointerEvent) {
            mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
        }
        window.addEventListener("pointermove", handlePointerMove);
        return () => window.removeEventListener("pointermove", handlePointerMove);
    }, []);

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.16;
            const targetX = mouse.current.y * 0.22;
            const targetZ = -mouse.current.x * 0.22;
            groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.04;
            groupRef.current.rotation.z += (targetZ - groupRef.current.rotation.z) * 0.04;
        }
        if (cubeRef.current) {
            cubeRef.current.rotation.x += delta * 0.25;
            cubeRef.current.rotation.y += delta * 0.3;
        }
        if (icoRef.current) {
            icoRef.current.rotation.y -= delta * 0.22;
            icoRef.current.rotation.x -= delta * 0.12;
        }
    });

    return (
        <group ref={groupRef}>
            <mesh ref={cubeRef} position={[0.8, 0.25, 0]}>
                <boxGeometry args={[1.3, 1.3, 1.3]} />
                <meshStandardMaterial map={codeTexture} roughness={0.55} metalness={0.15} />
            </mesh>

            <lineSegments ref={icoRef} position={[-1.1, -0.35, 0.2]} scale={0.95}>
                <primitive object={icoEdges} attach="geometry" />
                <lineBasicMaterial color={color} linewidth={1.5} />
            </lineSegments>
            <mesh position={[-1.1, -0.35, 0.2]} scale={0.95}>
                <icosahedronGeometry args={[1, 0]} />
                <meshBasicMaterial color={color} transparent opacity={0.06} />
            </mesh>
        </group>
    );
}

export default function Hero3DScene() {
    const [colorIndex, setColorIndex] = useState(0);

    return (
        <div
            className="w-full h-full cursor-pointer select-none"
            onClick={() => setColorIndex((i) => i + 1)}
            role="button"
            aria-label="Click to change the 3D shapes' color"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setColorIndex((i) => i + 1);
            }}
        >
            <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={0.6} />
                <pointLight position={[3, 3, 3]} intensity={1.3} color="#22C55E" />
                <pointLight position={[-3, -2, 2]} intensity={0.5} color="#4ADE80" />
                <Suspense fallback={null}>
                    <TechShapes colorIndex={colorIndex} />
                </Suspense>
            </Canvas>
        </div>
    );
}
