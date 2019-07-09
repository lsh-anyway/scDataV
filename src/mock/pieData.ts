import Mock from 'mockjs';

export default Mock.mock({
  a: () => Mock.Random.natural(0, 1000),
  b: () => Mock.Random.natural(0, 1000),
  c: () => Mock.Random.natural(0, 1000),
});
