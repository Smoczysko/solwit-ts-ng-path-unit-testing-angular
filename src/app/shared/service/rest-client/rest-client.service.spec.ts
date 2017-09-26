import { TestBed, inject} from '@angular/core/testing';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { RestClientService } from './rest-client.service';

describe('RestClientService', () => {
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        RestClientService,
        {provide: XHRBackend, useClass: MockBackend},
      ]
    });
  });

  describe('get()', () => {

    it('should return an Observable of objects',
      inject([RestClientService, XHRBackend], (restClient, mockBackend) => {

        const mockResponse = [
          {
            id: 185,
            name: "Tactical Nuclear Penguin",
            brewers_tips: "This level of alcohol can be achieved using a domestic freezer. Use a container with a tap close to the bottom so you can run the un-frozen, concentrated beer from under the ice on top. You may have to do this three or four times.",
            contributed_by: "Sam Mason <samjbmason>"
          },
          {
            id: 186,
            name: "Jasmine IPA",
            brewers_tips: "When dry hopping with the jasmine, use a muslin or cloth like a tea bag, and make sure it has a heavy object in it (ensure its clean). This will help to keep the jasmine submerged in the beer for better flavour extraction.",
            contributed_by: "Sam Mason <samjbmason>"
          }
        ];

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        restClient.get().subscribe((beers) => {
          expect(beers.length).toBe(2);

          expect(beers[0].id).toBe(185);
          expect(beers[0].name).toBe('Tactical Nuclear Penguin');

          expect(beers[1].id).toBe(186);
          expect(beers[1].name).toBe('Jasmine IPA');
        });
      }));
  });
});
