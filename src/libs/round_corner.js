const calc_point_on_line = (a, b, length) => {
  const ab_length = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
  const k = length / ab_length;
  return {
    x: a.x + (b.x - a.x) * k,
    y: a.y + (b.y - a.y) * k,
  };
};

const calc_angle = (a, b, c) => {
  const x1 = a.x - b.x;
  const x2 = c.x - b.x;
  const y1 = a.y - b.y;
  const y2 = c.y - b.y;
  const d1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
  const d2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
  const angle = Math.acos((x1 * x2 + y1 * y2) / (d1 * d2));
  return angle; // * (180 / Math.PI);
};

const calc_circle_intersection = (o1, o2, r1, r2) => {
  const d = Math.sqrt(Math.pow(o1.x - o2.x, 2) + Math.pow(o1.y - o2.y, 2));
  if (d > r1 + r2 || d < Math.abs(r1 - r2)) {
    return {};
  }
  if (Math.abs(d - (r1 - r2)) < 0.000001) {
    // console.log('Only one point. is zero?', Math.abs(d - (r1 - r2)));
    const x3 = (o1.x + o2.x) / 2;
    const y3 = (o1.y + o2.y) / 2;
    return { x : x3, y : y3 };
  }

  const b = (Math.pow(r2, 2) - Math.pow(r1, 2) + Math.pow(d, 2)) / (2 * d);
  const a = d - b;
  const h = Math.sqrt(Math.pow(r2, 2) - Math.pow(b, 2));
  const x = o1.x + (o2.x - o1.x) / (d / a);
  const y = o1.y + (o2.y - o1.y) / (d / a);
  const x3 = x - (y - o2.y) * h / b;
  const y3 = y + (x - o2.x) * h / b;
  // second intersection
  // const x4 = x + (y - o2.y) * h / b;
  // const y4 = y - (x - o2.x) * h / b;

  return { x : x3, y : y3 };
};

const rotate_point = (a, b, angle) => {
  const temp_a = { x : a.x - b.x, y : a.y - b.y };
  const x1 = temp_a.x * Math.cos(angle) - temp_a.y * Math.sin(angle);
  const y1 = temp_a.x * Math.sin(angle) + temp_a.y * Math.cos(angle);
  return { x : x1 + b.x , y : y1 + b.y };
};

const calc_line_equation = (a, b, d) => {
  const A1 = a.y - b.y;
  const B1 = b.x - a.x;
  const C1 = a.x * b.y - b.x * a.y;
  const M = 1 / Math.sqrt(Math.pow(A1, 2) + Math.pow(B1, 2));
  const A = M * A1;
  const B = M * B1;
  const C = M * C1 + d;
  return { A, B, C };
};

const calc_line_intersection = (a, b, c, radius) => {
  const { A: A1, B: B1, C: C1 } = calc_line_equation(a, b, radius);
  const { A: A2, B: B2, C: C2 } = calc_line_equation(b, c, radius);
  const x = (-C2 * B1 + C1 * B2) / (-B2 * A1 + B1 * A2);
  const y = (-A1 * x - C1) / B1;
  return { x, y };
};

const calc_perpendicular_point = (a, b, O) => {
  const { A, B, C } = calc_line_equation(a, b, 0);
  const x = (-A * B * O.y + Math.pow(B, 2) * O.x - A * C) / (Math.pow(A, 2) + Math.pow(B, 2));
  const y = (-A * x - C) / B;
  return { x, y };
};

const round_corner_points = (p1, p2, p3, corner_radius, points_quantity) => {
  const dots = [];
  const corner_angle = calc_angle(p1, p2, p3);

  if (corner_angle === Math.PI / 2) {
    const A = calc_point_on_line(p2, p1, corner_radius);
    const B = calc_point_on_line(p2, p3, corner_radius);
    const O = calc_circle_intersection(A, B, corner_radius, corner_radius);

    dots.push(
      // { ...p1, title: 'p1' },
      { ...A, title : 'A' },
    );
    
    for (let i = 1; i < points_quantity; i++) {
      const new_point = rotate_point(B, O, corner_angle / points_quantity * i);
      dots.push({...new_point, title : i});
    }

    dots.push(
      { ...B, title : 'B' },
    );
  } else {
    // const direction = true; // (p1.x < p3.x || p1.y < p3.y);
    // console.log('direction', direction, 'ps: ', p1, p2, p3);
    // direction ? -corner_radius : corner_radius
    const O = calc_line_intersection(p1, p2, p3, -corner_radius);
    const A = calc_perpendicular_point(p1, p2, O);
    const B = calc_perpendicular_point(p2, p3, O);

    const sector_angle = calc_angle(A, O, B);

    dots.push(
      // { ...p1, title: 'p1' },
      { ...A, title : 'A' },
    );
      
    for (let i = 1; i < points_quantity; i++) {
      // const rotated_point = direction ? A : B;
      const new_point = rotate_point(A, O, sector_angle / points_quantity * i);
      dots.push({...new_point, title : i});
    }

    dots.push(
      { ...B, title : 'B' },
      // { ...p2, title: 'p2' }, // TODO: remove
      // { ...p3, title: 'p3' }, // TODO: remove
    );
  }
  return dots;
};

export const round_corner = (points, i, corner_radius, points_quantity) => {
  const p1 = points[i];
  const p2 = (i >= points.length - 1) ? points[0] : points[i + 1];
  let p3 = {};
  if  (i === points.length - 2) {
    p3 = points[0];
  } else if (i >= points.length - 1) {
    p3 = points[1];
  } else {
    p3 = points[i + 2];
  }
  return round_corner_points(p1, p2, p3, corner_radius, points_quantity);
};

export const make_points = (points, corner_radius, points_quantity) => {
  const rounded_points = [];
  for(let i = 0; i < points.length; i++) {
    rounded_points.push(...round_corner(points, i, corner_radius, points_quantity));
  }

  return rounded_points;
};