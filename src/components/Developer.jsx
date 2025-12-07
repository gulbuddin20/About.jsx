import { useEffect, useRef, useMemo } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef();

  const { scene } = useGLTF('/models/animations/developer.glb');

  // Clone and extract nodes/materials in a single useMemo to avoid state updates during render
  const { nodes, materials } = useMemo(() => {
    const clonedScene = SkeletonUtils.clone(scene);
    const nodesMap = {};
    const materialsMap = {};

    clonedScene.traverse((child) => {
      if (child.name) nodesMap[child.name] = child;
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((mat) => {
            if (mat.name) materialsMap[mat.name] = mat;
          });
        } else if (child.material.name) {
          materialsMap[child.material.name] = child.material;
        }
      }
    });

    return { clone: clonedScene, nodes: nodesMap, materials: materialsMap };
  }, [scene]);

  const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx');
  const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx');
  const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx');
  const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx');

  // Memoize animations to avoid setting names during render
  const animations = useMemo(() => {
    if (!idleAnimation[0] || !saluteAnimation[0] || !clappingAnimation[0] || !victoryAnimation[0]) {
      return [];
    }

    const idle = idleAnimation[0].clone();
    const salute = saluteAnimation[0].clone();
    const clapping = clappingAnimation[0].clone();
    const victory = victoryAnimation[0].clone();

    idle.name = 'idle';
    salute.name = 'salute';
    clapping.name = 'clapping';
    victory.name = 'victory';

    return [idle, salute, clapping, victory];
  }, [idleAnimation, saluteAnimation, clappingAnimation, victoryAnimation]);

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
      return () => actions[animationName]?.fadeOut(0.5);
    }
  }, [animationName, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
  );
};

useGLTF.preload('/models/animations/developer.glb');

export default Developer;
