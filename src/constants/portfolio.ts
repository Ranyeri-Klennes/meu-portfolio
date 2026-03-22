export const langColor: Record<string, { bg: string; text: string }> = {
  Python:     { bg: 'bg-yellow-100/80 dark:bg-yellow-900/30', text: 'text-yellow-700 dark:text-yellow-400' },
  TypeScript: { bg: 'bg-blue-100/80 dark:bg-blue-900/30',   text: 'text-blue-700 dark:text-blue-400' },
  JavaScript: { bg: 'bg-amber-100/80 dark:bg-amber-900/30', text: 'text-amber-700 dark:text-amber-400' },
  'C#':       { bg: 'bg-indigo-100/80 dark:bg-indigo-900/30', text: 'text-indigo-700 dark:text-indigo-400' },
  Dart:       { bg: 'bg-cyan-100/80 dark:bg-cyan-900/30',   text: 'text-cyan-700 dark:text-cyan-400' },
  default:    { bg: 'bg-slate-100/80 dark:bg-slate-800/50', text: 'text-slate-600 dark:text-slate-400' },
};

export const ALL_COLLAGE: Array<{ src: string; type: 'image' | 'video' }> = [
  { src: '/story-collage (1).jpg',  type: 'image' },
  { src: '/story-collage (2).jpg',  type: 'image' },
  { src: '/story-collage (3).jpg',  type: 'image' },
  { src: '/story-collage (4).jpg',  type: 'image' },
  { src: '/story-collage (5).jpg',  type: 'image' },
  { src: '/story-collage (6).jpg',  type: 'image' },
  { src: '/story-collage (7).png',  type: 'image' },
  { src: '/story-collage (8).jpg',  type: 'image' },
  { src: '/story-collage (9).png',  type: 'image' },
  { src: '/story-collage (1).mp4',  type: 'video' },
  { src: '/story-collage (2).mp4',  type: 'video' },
  { src: '/story-collage (3).mp4',  type: 'video' },
  { src: '/story-collage (4).mp4',  type: 'video' },
  { src: '/story-collage (6).mp4',  type: 'video' },
  { src: '/story-collage (8).mp4',  type: 'video' },
  { src: '/story-collage (9).mp4',  type: 'video' },
];
