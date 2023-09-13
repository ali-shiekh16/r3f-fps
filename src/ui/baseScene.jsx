import { Canvas } from '@react-three/fiber';
import { Loader, PointerLockControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Lights from '../components/lights.jsx';
import Floor from '../components/floor.jsx';

const BaseScene = ({ children }) => {
  return (
    <div>
      <Canvas style={{ width: '100vw', height: '100vh' }} shadows>
        <Lights />

        <Physics gravity={[0, -9.8, 0]}>
          {children}
          <Floor rotation={[Math.PI / -2, 0, 0]} color='white' />
        </Physics>

        <PointerLockControls />
      </Canvas>
      <Loader />
    </div>
  );
};

export default BaseScene;
