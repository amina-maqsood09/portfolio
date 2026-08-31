import React, {
    Suspense,
    useRef,
    useState,
    useEffect,
    useMemo,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const COLORS = ["#22C55E", "#4ADE80", "#16A34A"];

/* ---------------------------------------------
   CODE TEXTURE
--------------------------------------------- */

function makeCodeTexture(color: string): THREE.CanvasTexture {
    const canvas = document.createElement("canvas");

    canvas.width = 512;
    canvas.height = 512;

    const ctx = canvas.getContext("2d")!;

    // Deep developer-style background
    ctx.fillStyle = "#070D0A";
    ctx.fillRect(0, 0, 512, 512);

    const lineColors = [
        "#22C55E",
        "#4ADE80",
        "#86EFAC",
        "#64748B",
        "#94A3B8",
        color,
    ];

    const rng = (seed: number) => {
        const x = Math.sin(seed * 12.9898) * 43758.5453;
        return x - Math.floor(x);
    };

    let seed = 10;
    let y = 32;

    while (y < 490) {
        const indent = Math.floor(rng(seed++) * 5) * 22;
        const width = 75 + rng(seed++) * 300;

        ctx.fillStyle =
            lineColors[Math.floor(rng(seed++) * lineColors.length)];

        ctx.globalAlpha = 0.35 + rng(seed++) * 0.5;

        ctx.fillRect(
            28 + indent,
            y,
            Math.min(width, 430 - indent),
            10
        );

        y += 29;
    }

    // A few brighter "code" lines
    ctx.globalAlpha = 0.85;

    ctx.fillStyle = color;
    ctx.fillRect(55, 110, 145, 8);
    ctx.fillRect(95, 168, 230, 8);
    ctx.fillRect(55, 285, 190, 8);
    ctx.fillRect(125, 372, 250, 8);

    ctx.globalAlpha = 1;

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;

    return texture;
}

/* ---------------------------------------------
   3D SCENE
--------------------------------------------- */

function TechShapes({ colorIndex }: { colorIndex: number }) {
    const groupRef = useRef<THREE.Group>(null);
    const cubeRef = useRef<THREE.Mesh>(null);
    const icoRef = useRef<THREE.LineSegments>(null);
    const orbitGroupRef = useRef<THREE.Group>(null);

    const mouse = useRef({
        x: 0,
        y: 0,
    });

    const { width } = useThree();

    const isMobile = width < 640;
    const isTablet = width >= 640 && width < 1000;

    const color = COLORS[colorIndex % COLORS.length];

    /* -----------------------------------------
       Responsive composition
    ----------------------------------------- */

    const layout = useMemo(() => {
        if (isMobile) {
            return {
                scale: 0.58,
                cube: [0.72, 0.12, -0.15] as [number, number, number],
                ico: [-0.72, -0.35, 0.05] as [number, number, number],
                orbit: [0, 0.86, 0.75] as [number, number, number],
            };
        }

        if (isTablet) {
            return {
                scale: 0.68,
                cube: [0.82, 0.25, -0.15] as [number, number, number],
                ico: [-0.88, -0.42, 0.05] as [number, number, number],
                orbit: [-0.02, 1.0, 0.9] as [number, number, number],
            };
        }

        return {
            scale: 0.78,
            cube: [0.95, 0.35, -0.2] as [number, number, number],
            ico: [-1.15, -0.5, 0.1] as [number, number, number],
            orbit: [-0.05, 1.15, 1.1] as [number, number, number],
        };
    }, [isMobile, isTablet]);

    /* -----------------------------------------
       Code texture
    ----------------------------------------- */

    const codeTexture = useMemo(
        () => makeCodeTexture(color),
        [color]
    );

    /* -----------------------------------------
       Wireframe geometry
    ----------------------------------------- */

    const icoEdges = useMemo(() => {
        const geometry = new THREE.IcosahedronGeometry(1, 1);
        return new THREE.EdgesGeometry(geometry);
    }, []);

    /* -----------------------------------------
       Mouse interaction
    ----------------------------------------- */

    useEffect(() => {
        const canHover = window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;

        if (!canHover) return;

        const handlePointerMove = (event: PointerEvent) => {
            mouse.current.x =
                (event.clientX / window.innerWidth) * 2 - 1;

            mouse.current.y =
                (event.clientY / window.innerHeight) * 2 - 1;
        };

        window.addEventListener(
            "pointermove",
            handlePointerMove
        );

        return () => {
            window.removeEventListener(
                "pointermove",
                handlePointerMove
            );
        };
    }, []);

    /* -----------------------------------------
       Animation
    ----------------------------------------- */

    useFrame((state, delta) => {
        const time = state.clock.elapsedTime;

        if (groupRef.current) {
            // Main slow rotation
            groupRef.current.rotation.y +=
                delta * (isMobile ? 0.09 : 0.14);

            // Smooth mouse parallax
            if (!isMobile) {
                const targetX = mouse.current.y * 0.18;
                const targetZ = -mouse.current.x * 0.18;

                groupRef.current.rotation.x +=
                    (targetX - groupRef.current.rotation.x) *
                    0.035;

                groupRef.current.rotation.z +=
                    (targetZ - groupRef.current.rotation.z) *
                    0.035;
            }

            // Very subtle floating motion
            groupRef.current.position.y =
                Math.sin(time * 0.7) *
                (isMobile ? 0.025 : 0.045);
        }

        /* -------------------------------------
           Cube
        ------------------------------------- */

        if (cubeRef.current) {
            cubeRef.current.rotation.x +=
                delta * (isMobile ? 0.12 : 0.18);

            cubeRef.current.rotation.y +=
                delta * (isMobile ? 0.16 : 0.22);

            // Subtle floating
            cubeRef.current.position.y =
                layout.cube[1] +
                Math.sin(time * 0.9) * 0.035;
        }

        /* -------------------------------------
           Wireframe sphere
        ------------------------------------- */

        if (icoRef.current) {
            icoRef.current.rotation.y -=
                delta * (isMobile ? 0.11 : 0.17);

            icoRef.current.rotation.x -=
                delta * (isMobile ? 0.06 : 0.09);
        }

        /* -------------------------------------
           Orbit system
        ------------------------------------- */

        if (orbitGroupRef.current) {
            orbitGroupRef.current.rotation.y +=
                delta * (isMobile ? 0.22 : 0.32);

            orbitGroupRef.current.rotation.z +=
                delta * (isMobile ? 0.09 : 0.14);
        }
    });

    return (
        <group
            ref={groupRef}
            scale={layout.scale}
        >
            {/* =================================
                CODE CUBE
            ================================= */}

            <mesh
                ref={cubeRef}
                position={layout.cube}
                castShadow
            >
                <boxGeometry
                    args={[1.18, 1.18, 1.18]}
                />

                <meshStandardMaterial
                    map={codeTexture}
                    roughness={0.48}
                    metalness={0.2}
                    emissive={color}
                    emissiveIntensity={0.025}
                />
            </mesh>

            {/* Subtle cube glow */}
            <mesh
                position={[
                    layout.cube[0],
                    layout.cube[1],
                    layout.cube[2] - 0.015,
                ]}
                scale={1.012}
            >
                <boxGeometry
                    args={[1.18, 1.18, 1.18]}
                />

                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.025}
                    side={THREE.BackSide}
                />
            </mesh>

            {/* =================================
                WIREFRAME ICOSAHEDRON
            ================================= */}

            <lineSegments
                ref={icoRef}
                position={layout.ico}
                scale={0.88}
            >
                <primitive
                    object={icoEdges}
                    attach="geometry"
                />

                <lineBasicMaterial
                    color={color}
                    transparent
                    opacity={0.9}
                />
            </lineSegments>

            {/* Inner transparent surface */}

            <mesh
                position={layout.ico}
                scale={0.88}
            >
                <icosahedronGeometry
                    args={[1, 1]}
                />

                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.035}
                    wireframe={false}
                />
            </mesh>

            {/* =================================
                ORBITAL AI OBJECT
            ================================= */}

            <group
                ref={orbitGroupRef}
                position={layout.orbit}
                scale={1.1}
            >
                {/* Central glowing sphere */}

                <mesh>
                    <sphereGeometry
                        args={[0.17, 32, 32]}
                    />

                    <meshStandardMaterial
                        color={color}
                        emissive={color}
                        emissiveIntensity={
                            isMobile ? 0.65 : 0.9
                        }
                        roughness={0.28}
                        metalness={0.1}
                    />
                </mesh>

                {/* Orbit 1 */}

                <mesh
                    rotation={[
                        Math.PI / 2.2,
                        0,
                        0,
                    ]}
                >
                    <torusGeometry
                        args={[
                            0.57,
                            0.014,
                            10,
                            80,
                        ]}
                    />

                    <meshStandardMaterial
                        color={color}
                        emissive={color}
                        emissiveIntensity={0.32}
                        roughness={0.4}
                        metalness={0.15}
                    />
                </mesh>

                {/* Orbit 2 */}

                <mesh
                    rotation={[
                        0,
                        Math.PI / 2.4,
                        Math.PI / 6,
                    ]}
                >
                    <torusGeometry
                        args={[
                            0.57,
                            0.014,
                            10,
                            80,
                        ]}
                    />

                    <meshStandardMaterial
                        color={color}
                        emissive={color}
                        emissiveIntensity={0.32}
                        roughness={0.4}
                        metalness={0.15}
                    />
                </mesh>

                {/* Orbit 3 */}

                <mesh
                    rotation={[
                        0,
                        -Math.PI / 2.4,
                        -Math.PI / 6,
                    ]}
                >
                    <torusGeometry
                        args={[
                            0.57,
                            0.014,
                            10,
                            80,
                        ]}
                    />

                    <meshStandardMaterial
                        color={color}
                        emissive={color}
                        emissiveIntensity={0.32}
                        roughness={0.4}
                        metalness={0.15}
                    />
                </mesh>
            </group>
        </group>
    );
}

/* =============================================
   MAIN HERO 3D COMPONENT
============================================= */

export default function Hero3DScene() {
    const [colorIndex, setColorIndex] = useState(0);

    const changeColor = () => {
        setColorIndex((index) => index + 1);
    };

    return (
        <div
            className="w-full h-full select-none"
            onClick={changeColor}
            role="button"
            aria-label="Click to change the 3D shapes color"
            tabIndex={0}
            onKeyDown={(event) => {
                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {
                    event.preventDefault();
                    changeColor();
                }
            }}
        >
            <Canvas
                camera={{
                    position: [0, 0, 4.2],
                    fov: 45,
                }}
                dpr={[1, 1.7]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                }}
            >
                {/* =================================
                    LIGHTING
                ================================= */}

                <ambientLight intensity={0.48} />

                <pointLight
                    position={[3, 3, 3]}
                    intensity={1.15}
                    color="#22C55E"
                />

                <pointLight
                    position={[-3, -2, 2]}
                    intensity={0.4}
                    color="#4ADE80"
                />

                <pointLight
                    position={[0, 0, -3]}
                    intensity={0.25}
                    color="#16A34A"
                />

                <Suspense fallback={null}>
                    <TechShapes
                        colorIndex={colorIndex}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}