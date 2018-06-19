import { MedicationsModule } from './medications.module';

describe('MedicationsModule', () => {
  let medicationsModule: MedicationsModule;

  beforeEach(() => {
    medicationsModule = new MedicationsModule();
  });

  it('should create an instance', () => {
    expect(medicationsModule).toBeTruthy();
  });
});
