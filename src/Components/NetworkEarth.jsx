import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, Sphere, Stars } from "@react-three/drei";
import * as THREE from "three";

const NetworkEarth = () => {
  const globeRef = useRef();
  const groupRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  // Procedural World Map Logic with high-fidelity vibrancy
  const { positions, lines, landNodes, foregroundLines } = useMemo(() => {
    const radius = 4;
    const pts = [];
    const landNodes = [];
    const positions = [];
    const linePts = [];
    const fgLinePts = [];

    const canvas = document.createElement("canvas");
    canvas.width = 360;
    canvas.height = 180;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 360, 180);
    ctx.fillStyle = "white";
    
    // Draw continents
    ctx.fillRect(40, 30, 80, 60);  
    ctx.fillRect(80, 90, 40, 60);  
    ctx.fillRect(160, 20, 150, 70); 
    ctx.fillRect(170, 70, 60, 70);  
    ctx.fillRect(300, 100, 40, 30); 
    
    const imgData = ctx.getImageData(0, 0, 360, 180).data;

    const latCount = 50;
    const lonCount = 100;
    
    for (let i = 0; i < latCount; i++) {
        const phi = (i / latCount) * Math.PI;
        const lat = (i / latCount) * 180;
        for (let j = 0; j < lonCount; j++) {
            const theta = (j / lonCount) * 2 * Math.PI;
            const lon = (j / lonCount) * 360;
            
            const pixelIdx = (Math.floor(lat) * 360 + Math.floor(lon)) * 4;
            const isLand = imgData[pixelIdx] > 128;

            const pos = new THREE.Vector3().setFromSphericalCoords(radius, phi, theta);
            
            if (isLand || Math.random() < 0.15) {
                positions.push(pos.x, pos.y, pos.z);
                pts.push(pos);
                if (isLand && Math.random() < 0.1) landNodes.push(pos);
            }
        }
    }

    // High Density Network
    for (let i = 0; i < pts.length; i += 8) {
      for (let j = i + 1; j < pts.length; j += 20) {
        if (pts[i].distanceTo(pts[j]) < 2.0) {
          linePts.push(pts[i].x, pts[i].y, pts[i].z);
          linePts.push(pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }

    // foreground Networks (Vibrant)
    for (let i = 0; i < 40; i++) {
        const start = pts[Math.floor(Math.random() * pts.length)];
        const end = pts[Math.floor(Math.random() * pts.length)];
        if (start.z > 0 && end.z > 0 && start.distanceTo(end) < 6) {
            fgLinePts.push(start.x, start.y, start.z);
            fgLinePts.push(end.x, end.y, end.z);
        }
    }

    return { 
        positions: new Float32Array(positions), 
        lines: new Float32Array(linePts),
        foregroundLines: new Float32Array(fgLinePts),
        landNodes
    };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const { x, y } = state.pointer;
    
    mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, x, 0.05);
    mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, y, 0.05);

    if (groupRef.current) {
        // Slow, gentle auto-rotation + very subtle mouse influence
        groupRef.current.rotation.y = time * 0.06 + mouse.current.x * 0.15;
        groupRef.current.rotation.x = mouse.current.y * -0.08;
    }
    
    if (globeRef.current) {
        globeRef.current.rotation.y = time * 0.008;
    }
  });

  return (
    <>
      <Stars radius={250} depth={50} count={8000} factor={6} saturation={0} fade speed={2} />
      
      <group ref={groupRef}>
        {/* Vibrant World Map Points */}
        <points ref={globeRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial 
            color="#38bdf8" 
            size={0.015} 
            transparent 
            opacity={0.75} 
            blending={THREE.AdditiveBlending}
            sizeAttenuation 
          />
        </points>

        {/* Prominent Connection Network */}
        <lineSegments>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attach="attributes-position"
              count={lines.length / 3}
              array={lines}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial 
            color="#60a5fa" 
            transparent 
            opacity={0.28} 
            blending={THREE.AdditiveBlending}
          />
        </lineSegments>

        {/* Foreground accent lines */}
        <lineSegments>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attach="attributes-position"
              count={foregroundLines.length / 3}
              array={foregroundLines}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial 
            color="#7dd3fc" 
            transparent 
            opacity={0.18} 
            blending={THREE.AdditiveBlending}
          />
        </lineSegments>

        {/* Land nodes — bright city dots */}
        {landNodes.map((pt, i) => (
          <group key={i} position={pt}>
              <mesh>
                  <sphereGeometry args={[0.018, 8, 8]} />
                  <meshStandardMaterial color="#ffffff" emissive="#38bdf8" emissiveIntensity={8} />
              </mesh>
              <mesh scale={5}>
                  <sphereGeometry args={[0.018, 8, 8]} />
                  <meshStandardMaterial color="#7dd3fc" transparent opacity={0.2} blending={THREE.AdditiveBlending} />
              </mesh>
          </group>
        ))}

        {/* Atmospheric glow */}
        <Sphere args={[4.6, 64, 64]}>
          <meshStandardMaterial 
            color="#38bdf8" 
            transparent 
            opacity={0.07} 
            side={THREE.BackSide} 
            blending={THREE.AdditiveBlending}
          />
        </Sphere>
        <Sphere args={[4.2, 64, 64]}>
          <meshStandardMaterial 
            color="#818cf8" 
            transparent 
            opacity={0.04} 
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
          />
        </Sphere>
        {/* Subtle surface tint */}
        <Sphere args={[3.95, 64, 64]}>
          <meshStandardMaterial 
            color="#38bdf8" 
            transparent 
            opacity={0.025} 
            blending={THREE.AdditiveBlending}
          />
        </Sphere>
      </group>
    </>
  );
};

export default NetworkEarth;
