import { CalculateModule } from './calculate.module';

describe('CalculateModule', () => {
  let calculateModule: CalculateModule;

  beforeEach(() => {
    calculateModule = new CalculateModule();
  });

  it('should create an instance', () => {
    expect(calculateModule).toBeTruthy();
  });
});
