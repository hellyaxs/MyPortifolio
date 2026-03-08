const DEVICON_BASE =
  'https://raw.githubusercontent.com/devicons/devicon/master/icons';

const faces = [
  { slug: 'typescript/typescript-original', color: '#3178c6' },
  { slug: 'java/java-original',             color: '#b07219' },
  { slug: 'nodejs/nodejs-original',         color: '#539E43' },
  { slug: 'docker/docker-original',         color: '#2496ED' },
  { slug: 'nestjs/nestjs-original',         color: '#E0234E' },
  { slug: 'flutter/flutter-original',       color: '#54C5F8' },
];

const faceTransforms = [
  'rotateY(0deg)   translateZ(70px)',  // front
  'rotateY(180deg) translateZ(70px)',  // back
  'rotateY(90deg)  translateZ(70px)',  // right
  'rotateY(-90deg) translateZ(70px)', // left
  'rotateX(90deg)  translateZ(70px)', // top
  'rotateX(-90deg) translateZ(70px)', // bottom
];

export default function Cube3D() {
  return (
    <div
      className="shrink-0 hidden lg:flex items-center justify-center"
      style={{ perspective: '500px', width: '160px', height: '160px' }}
    >
      <div
        style={{
          width: '140px',
          height: '140px',
          position: 'relative',
          transformStyle: 'preserve-3d',
          animation: 'cubeRotate 12s infinite linear',
        }}
      >
        {faces.map((face, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '12px',
              border: `1.5px solid ${face.color}55`,
              backgroundColor: `${face.color}10`,
              backdropFilter: 'blur(4px)',
              transform: faceTransforms[i],
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${DEVICON_BASE}/${face.slug}.svg`}
              alt=""
              width={52}
              height={52}
              style={{ filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.4))' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
