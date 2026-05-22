'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    /* ── Renderer ───────────────────────────────── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    /* ── Scene / Camera ─────────────────────────── */
    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.set(0, 0, 7)

    /* ── Lights ─────────────────────────────────── */
    scene.add(new THREE.AmbientLight(0xffffff, 0.3))
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.7)
    dirLight.position.set(5, 8, 5)
    scene.add(dirLight)

    const goldLight = new THREE.PointLight(0xFAA21B, 3.5, 20)
    goldLight.position.set(-3, 3, 3)
    scene.add(goldLight)

    const pinkLight = new THREE.PointLight(0xEE3869, 2.5, 18)
    pinkLight.position.set(4, -2, 2)
    scene.add(pinkLight)

    const blueLight = new THREE.PointLight(0x2D5D8A, 2.0, 16)
    blueLight.position.set(-4, -3, 1)
    scene.add(blueLight)

    const tealLight = new THREE.PointLight(0x17998F, 1.5, 12)
    tealLight.position.set(0, 0, 2)
    scene.add(tealLight)

    /* ── Central glow orb ───────────────────────── */
    const orbGeo = new THREE.SphereGeometry(1.2, 64, 64)
    const orbMat = new THREE.MeshPhongMaterial({
      color: new THREE.Color('#FAA21B'),
      emissive: new THREE.Color('#F07D15'),
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.7,
      shininess: 60,
    })
    const orb = new THREE.Mesh(orbGeo, orbMat)
    orb.position.set(0, 0.8, -2)
    scene.add(orb)

    /* ── Floating shapes ────────────────────────── */
    const SHAPE_DEFS = [
      { pos: [3.2,  0.6, -1.5] as const, color: '#FAA21B', geoFn: () => new THREE.IcosahedronGeometry(1, 0), rot: [0.008, 0.012, 0.005] as const, scale: 1.1 },
      { pos: [-3.3, 0.8, -0.5] as const, color: '#EE3869', geoFn: () => new THREE.OctahedronGeometry(1, 0),  rot: [0.010, 0.007, 0.008] as const, scale: 0.9 },
      { pos: [-2.6,-1.8, -1.0] as const, color: '#99292D', geoFn: () => new THREE.BoxGeometry(1, 1, 1),       rot: [0.006, 0.010, 0.007] as const, scale: 0.9 },
      { pos: [2.5, -2.2, -1.0] as const, color: '#2D5D8A', geoFn: () => new THREE.TetrahedronGeometry(1, 0), rot: [0.009, 0.006, 0.010] as const, scale: 0.9 },
      { pos: [-4.0, 1.5, -2.0] as const, color: '#17998F', geoFn: () => new THREE.TorusGeometry(0.7, 0.25, 10, 8), rot: [0.012, 0.008, 0.005] as const, scale: 0.9 },
      { pos: [1.2,  2.4, -0.5] as const, color: '#FAA21B', geoFn: () => new THREE.IcosahedronGeometry(1, 0), rot: [0.015, 0.010, 0.008] as const, scale: 0.6 },
      { pos: [-1.5, 2.6, -1.5] as const, color: '#99292D', geoFn: () => new THREE.OctahedronGeometry(1, 0),  rot: [0.008, 0.014, 0.006] as const, scale: 0.6 },
      { pos: [4.5,  1.0, -2.5] as const, color: '#2D5D8A', geoFn: () => new THREE.BoxGeometry(1, 1, 1),       rot: [0.010, 0.007, 0.012] as const, scale: 0.7 },
      { pos: [-4.5,-0.5, -2.5] as const, color: '#EE3869', geoFn: () => new THREE.TetrahedronGeometry(1, 0), rot: [0.007, 0.011, 0.009] as const, scale: 0.7 },
      { pos: [0.0, -3.0, -4.0] as const, color: '#FAA21B', geoFn: () => new THREE.IcosahedronGeometry(1, 0), rot: [0.004, 0.006, 0.003] as const, scale: 1.4 },
      { pos: [4.8, -1.2, -3.0] as const, color: '#EE3869', geoFn: () => new THREE.TorusGeometry(0.7, 0.25, 10, 8), rot: [0.008, 0.005, 0.010] as const, scale: 0.9 },
      { pos: [-0.8, 3.5, -3.5] as const, color: '#17998F', geoFn: () => new THREE.BoxGeometry(1, 1, 1),       rot: [0.011, 0.008, 0.007] as const, scale: 0.8 },
    ]

    interface ShapeData {
      mesh:   THREE.Mesh
      rot:    readonly [number, number, number]
      baseY:  number
    }

    const shapes: ShapeData[] = SHAPE_DEFS.map(({ pos, color, geoFn, rot, scale }) => {
      const geo  = geoFn()
      const mat  = new THREE.MeshPhongMaterial({
        color: new THREE.Color(color),
        shininess: 120,
        specular: new THREE.Color(0x444444),
        transparent: true,
        opacity: 0.88,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(pos[0], pos[1], pos[2])
      mesh.scale.setScalar(scale)
      scene.add(mesh)

      /* wire outline */
      const edges   = new THREE.EdgesGeometry(geo)
      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: 0.3,
      })
      const wire = new THREE.LineSegments(edges, lineMat)
      wire.scale.setScalar(1.01)
      mesh.add(wire)

      return { mesh, rot, baseY: pos[1] }
    })

    /* ── Particles ──────────────────────────────── */
    const COUNT = 280
    const pPositions = new Float32Array(COUNT * 3)
    const pColors    = new Float32Array(COUNT * 3)
    const palette    = [
      new THREE.Color('#FAA21B'),
      new THREE.Color('#EE3869'),
      new THREE.Color('#17998F'),
      new THREE.Color('#2D5D8A'),
    ]
    for (let i = 0; i < COUNT; i++) {
      pPositions[i * 3]     = (Math.random() - 0.5) * 28
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * 16
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 12 - 2
      const c = palette[i % palette.length]
      pColors[i * 3]        = c.r
      pColors[i * 3 + 1]    = c.g
      pColors[i * 3 + 2]    = c.b
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3))
    pGeo.setAttribute('color',    new THREE.BufferAttribute(pColors,    3))
    const pMat    = new THREE.PointsMaterial({ size: 0.08, vertexColors: true, transparent: true, opacity: 0.75, sizeAttenuation: true })
    const points  = new THREE.Points(pGeo, pMat)
    scene.add(points)

    /* ── Stars ──────────────────────────────────── */
    const starCount = 3000
    const starPos   = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount; i++) {
      starPos[i * 3]     = (Math.random() - 0.5) * 160
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 160
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 160 - 20
    }
    const starGeo = new THREE.BufferGeometry()
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3))
    const starMat = new THREE.PointsMaterial({ size: 0.05, color: 0xffffff, transparent: true, opacity: 0.6 })
    scene.add(new THREE.Points(starGeo, starMat))

    /* ── Mouse parallax ─────────────────────────── */
    const mouse = { x: 0, y: 0 }
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth  - 0.5) * 2
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    /* ── Resize ─────────────────────────────────── */
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)

    /* ── Render loop ────────────────────────────── */
    let rafId: number
    const clock = new THREE.Clock()

    function animate() {
      rafId = requestAnimationFrame(animate)
      const t  = clock.getElapsedTime()
      const dt = clock.getDelta()

      /* camera lerp */
      camera.position.x += (mouse.x * 0.4 - camera.position.x) * 0.06
      camera.position.y += (-mouse.y * 0.3 - camera.position.y) * 0.06
      camera.lookAt(0, 0, 0)

      /* shapes */
      shapes.forEach(({ mesh: m, rot, baseY }) => {
        m.rotation.x += rot[0] * dt * 60
        m.rotation.y += rot[1] * dt * 60
        m.rotation.z += rot[2] * dt * 60
        m.position.y = baseY + Math.sin(t * 0.6 + m.position.x) * 0.3
      })

      /* orb */
      orb.rotation.z = t * 0.08

      /* particles */
      points.rotation.y = t * 0.015
      points.rotation.x = Math.sin(t * 0.08) * 0.04

      /* lights pulse */
      goldLight.intensity = 3.5 + Math.sin(t * 1.1) * 0.9
      goldLight.position.x = -3 + Math.sin(t * 0.4) * 1.5
      pinkLight.intensity = 2.5 + Math.sin(t * 0.9 + 1) * 0.7

      renderer.render(scene, camera)
    }
    animate()

    /* ── Cleanup ────────────────────────────────── */
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} style={{ position: 'absolute', inset: 0 }} />
}
