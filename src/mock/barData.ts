import Mock from 'mockjs';

export default Mock.mock({
  'data|10': [
    {
      date: () => Mock.Random.date('MM-dd'),
      a: () => Mock.Random.natural(0, 1000),
      b: () => Mock.Random.natural(0, 1000),
    },
  ],
});
