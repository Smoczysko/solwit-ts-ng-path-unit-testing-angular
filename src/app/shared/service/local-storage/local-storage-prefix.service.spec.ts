import { LocalStoragePrefixService } from './local-storage-prefix.service';

describe('LocalStoragePrefixService', () => {
  let service: LocalStoragePrefixService;

  beforeEach(() => {
    service = new LocalStoragePrefixService();
  });

  it('#get should return empty string as prefix after construction', () => {
    expect(service.get()).toBe('');
  });

  it('#set should set specified prefix', () => {
    service.set('SOME_CUSTOM_PREFIX');

    expect(service.get()).toBe('SOME_CUSTOM_PREFIX');
  });

  it('#clear should set prefix prefix to empty string', () => {
    service.set('SOME_CUSTOM_PREFIX');
    service.clear();

    expect(service.get()).toBe('');
  });

  describe('async methods', () => {
    beforeEach(() => {
      service.set('SOME_CUSTOM_PREFIX');
    });

    it('#getObservable should return observable value', (done: DoneFn) => {
      service.getObservable().subscribe((prefix) => {
        expect(prefix).toBe('SOME_CUSTOM_PREFIX');

        done();
      });
    });

    it('#getPromise should return async value', (done: DoneFn) => {
      service.getPromise().then((prefix) => {
        expect(prefix).toBe('SOME_CUSTOM_PREFIX');

        done();
      });
    });
  });
});
