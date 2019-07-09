import Mock from 'mockjs';

export default Mock.mock({
  'data|50': [
    {
      name: () => Mock.Random.csentence(5, 20),
      value: () => Mock.Random.natural(0, 1000),
    },
  ],
});
