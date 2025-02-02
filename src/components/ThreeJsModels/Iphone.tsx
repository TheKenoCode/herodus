import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Group } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function ModelAsset(props) {
  const { camera } = useThree();

  const gltfLoader = new GLTFLoader();
  const [model, setModel] = useState(null);
  const modelRef = useRef<Group>();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003;
    }
  });

  useEffect(() => {
    gltfLoader.load('/ModelsFolder/iphone.glb', (gltf) => {
      setModel(gltf.scene);
    });

    camera.position.set(10, 0, 18);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return model ? <primitive ref={modelRef} object={model} {...props} /> : null;
}

const Iphone = () => {
  return (
    <Canvas
      className='lg:z-10 '
      onWheel={(e) => e.stopPropagation()}
      style={{ height: '100%', width: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.8} position={[10, 10, 5]} />
      <Suspense fallback={null}>
        <Environment files='/img/kloofendal_misty_morning_puresky_1k.hdr' />
        <ModelAsset position={[0, -13, 0]} />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Iphone;
