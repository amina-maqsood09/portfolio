import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

const COLORS = ["#22C55E", "#4ADE80", "#16A34A"];

function GlassyShapes({ colorIndex }: { colorIndex: number }) {
    const groupRef = useRef<THREE.Group>(null);
    const torusRef = useRef<THREE.Mesh>(null);
    const icoRef = useRef<THREE.Mesh>(null);
    const mouse = useRef({ x: 0, y: 0 });
    const color = COLORS[colorIndex % COLORS.length];

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
            groupRef.current.rotation.y += delta * 0.18;
            const targetX = mouse.current.y * 0.25;
            const targetZ = -mouse.current.x * 0.25;
            groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.04;
            groupRef.current.rotation.z += (targetZ - groupRef.current.rotation.z) * 0.04;
        }
        if (torusRef.current) torusRef.current.rotation.x += delta * 0.35;
        if (icoRef.current) icoRef.current.rotation.y -= delta * 0.22;
    });

    return (
        <group ref={groupRef}>
            <mesh ref={torusRef} position={[0.85, 0.3, 0]}>
                <torusGeometry args={[1.05, 0.34, 32, 128]} />
                <meshPhysicalMaterial
                    color={color}
                    roughness={0.15}
                    metalness={0.1}
                    transmission={0.9}
                    thickness={1.2}
                    ior={1.4}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    envMapIntensity={1.3}
                />
            </mesh>
            <mesh ref={icoRef} position={[-1.05, -0.4, 0.3]} scale={0.82}>
                <icosahedronGeometry args={[1, 0]} />
                <meshPhysicalMaterial
                    color={color}
                    roughness={0.2}
                    metalness={0.1}
                    transmission={0.85}
                    thickness={1}
                    ior={1.4}
                    clearcoat={1}
                    clearcoatRoughness={0.15}
                    envMapIntensity={1.3}
                />
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
                <ambientLight intensity={0.5} />
                <pointLight position={[3, 3, 3]} intensity={1.4} color="#22C55E" />
                <pointLight position={[-3, -2, 2]} intensity={0.7} color="#4ADE80" />
                <Suspense fallback={null}>
                    <Environment preset="city" />
                    <GlassyShapes colorIndex={colorIndex} />
                </Suspense>
            </Canvas>
        </div>
    );
}
