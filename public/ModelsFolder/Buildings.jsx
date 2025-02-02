/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 buildings.glb --transform 
Files: buildings.glb [27.4MB] > buildings-transformed.glb [3.9MB] (86%)
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('/buildings-transformed.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.defaultMaterial006.geometry}
        material={materials.Arch_and_pillars}
        position={[-3.403, -9.277, -33.522]}
        scale={200.441}
      />
      <mesh
        geometry={nodes.defaultMaterial002.geometry}
        material={materials.Ballustrade}
        position={[-3.403, -9.277, -33.522]}
        scale={200.441}
      />
      <mesh
        geometry={nodes.defaultMaterial004.geometry}
        material={materials.Bath_tub}
        position={[-3.403, -9.277, -33.522]}
        scale={200.441}
      />
      <mesh
        geometry={nodes.defaultMaterial003.geometry}
        material={materials.Changing_rooms}
        position={[-3.403, -9.277, -33.522]}
        scale={200.441}
      />
      <mesh
        geometry={nodes.defaultMaterial.geometry}
        material={materials.Ground}
        position={[-3.403, -9.277, -33.522]}
        scale={200.441}
      />
      <mesh
        geometry={nodes.defaultMaterial005.geometry}
        material={materials.Roofs}
        position={[-3.403, -9.277, -33.522]}
        scale={200.441}
      />
      <mesh
        geometry={nodes.defaultMaterial007.geometry}
        material={materials.Statue_Young_man}
        position={[-3.403, -9.277, -33.522]}
        scale={200.441}
      />
      <mesh
        geometry={nodes.defaultMaterial008.geometry}
        material={materials.Statue_old_man}
        position={[-3.403, -9.277, -33.522]}
        scale={200.441}
      />
      <mesh
        geometry={nodes.defaultMaterial001.geometry}
        material={materials.Water}
        position={[-3.403, -9.277, -33.522]}
        scale={200.441}
      />
    </group>
  );
}

useGLTF.preload('/buildings-transformed.glb');
