/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Dinoblend.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube020.geometry}
        material={nodes.Cube020.material}
        position={[-1.79, 0.36, -0.62]}
        rotation={[0, 0, 0.34]}
        scale={[0.2, 0.2, 0.2]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[-1.75, 0.37, 0.59]}
        rotation={[0, 0, 0.34]}
        scale={[0.2, 0.2, 0.2]}
      />
      <mesh
        geometry={nodes.Cube018.geometry}
        material={nodes.Cube018.material}
        position={[-1.91, -0.72, -0.73]}
        rotation={[0.02, -0.17, 2.41]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        geometry={nodes.Cube017.geometry}
        material={nodes.Cube017.material}
        position={[-1.9, -0.72, -0.6]}
        rotation={[-0.07, -0.16, 1.91]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        geometry={nodes.Cube016.geometry}
        material={nodes.Cube016.material}
        position={[-1.95, -0.72, -0.49]}
        rotation={[0.03, -0.17, 2.52]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        geometry={nodes.Cube015.geometry}
        material={nodes.Cube015.material}
        position={[-2.01, -0.63, -0.73]}
        rotation={[1.67, -0.58, 2.87]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        geometry={nodes.Cube014.geometry}
        material={nodes.Cube014.material}
        position={[-1.98, -0.61, 0.48]}
        rotation={[1.83, -0.44, 2.49]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        geometry={nodes.Cube013.geometry}
        material={nodes.Cube013.material}
        position={[-1.84, -0.72, 0.47]}
        rotation={[0.09, -0.14, 2.86]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        geometry={nodes.Cube012.geometry}
        material={nodes.Cube012.material}
        position={[-1.85, -0.76, 0.6]}
        rotation={[0.03, -0.17, 2.49]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        geometry={nodes.Cube011.geometry}
        material={nodes.Cube011.material}
        position={[-1.9, -0.73, 0.71]}
        rotation={[0.01, -0.17, 2.39]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={nodes.Cube010.material}
        position={[-0.45, -1.49, -0.72]}
        rotation={[-Math.PI, -0.27, -Math.PI]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={nodes.Cube009.material}
        position={[-0.93, -1.61, -0.42]}
        rotation={[-0.16, 0.54, 0.22]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Cube008.geometry}
        material={nodes.Cube008.material}
        position={[-1.03, -1.59, -0.64]}
        rotation={[0, -0.09, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
        position={[-0.97, -1.6, -0.83]}
        rotation={[0, -0.49, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[-0.45, -1.52, 0.67]}
        rotation={[-Math.PI, -0.27, -Math.PI]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[-0.98, -1.6, 0.8]}
        rotation={[-0.14, 0.09, 0.15]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[-1.03, -1.61, 0.61]}
        rotation={[0, -0.09, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[-0.95, -1.62, 0.43]}
        rotation={[0, -0.27, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[-0.22, 0.79, 0]}
        rotation={[0, 0, 0.51]}
        scale={[0.84, 0.84, 0.84]}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[-0.4, 0.49, -0.07]}
        rotation={[0, 0, -0.01]}
        scale={[0.84, 0.84, 0.84]}
      />
    </group>
  )
}

useGLTF.preload('/Dinoblend.glb')