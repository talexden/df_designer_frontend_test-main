const MOCK_AREA_SIZE = 6;
const SHIFT = 3;

const mockSizeX = Math.floor(Math.random() * MOCK_AREA_SIZE + SHIFT);
const mockSizeY = Math.floor(Math.random() * MOCK_AREA_SIZE + SHIFT);

const createMockSortedGraphs = (sizeY: number, sizeX: number): string[][] => {
  const createArray = (size: number) => new Array(size).fill('0');
  const result = createArray(sizeY);

  for (let i = 0; i < sizeY; i++) {
    result[i] = createArray(sizeX)
    for (let j = 0; j < sizeX; j++) {
      result[i][j] = `a${i}${j}`;
    }
  }
  return result;
};

const mockSortedGraphs = createMockSortedGraphs(mockSizeY, mockSizeX);

export {mockSortedGraphs}

