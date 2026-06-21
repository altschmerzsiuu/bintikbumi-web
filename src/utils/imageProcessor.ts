/**
 * Utility to process images at runtime and remove white backgrounds.
 */
export function removeWhiteBackground(src: string, tolerance: number = 240): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return resolve(src);
      
      ctx.drawImage(img, 0, 0);
      try {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          if (r >= tolerance && g >= tolerance && b >= tolerance) {
            // For anti-aliasing on edges, we can do a gradient
            const avg = (r + g + b) / 3;
            if (avg > 250) {
              data[i + 3] = 0; // Pure transparent
            } else {
              // Partial transparency for edge pixels
              data[i + 3] = Math.max(0, 255 - ((avg - tolerance) * (255 / (255 - tolerance))));
            }
          }
        }
        
        ctx.putImageData(imageData, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      } catch (e) {
        // If tainted canvas error (CORS), just return original
        console.warn('Canvas tainted, returning original image src.', e);
        resolve(src);
      }
    };
    img.onerror = reject;
    img.src = src;
  });
}
