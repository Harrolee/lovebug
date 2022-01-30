export const MoveFinger = (entities, {touches}) => {
  touches
    .filter(t => t.type === 'move')
    .forEach(t => {
      let finger = entities[t.id];
      if (finger && finger.position) {
        finger.position = [
          finger.position.x + t.delta.pageX,
          finger.position.y + t.delta.pageY,
        ];
      }
    });

  return entities;
};
