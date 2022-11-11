import { decodeAuthenticatorExtensions } from './decodeAuthenticatorExtensions';
import * as uint8Array from './uint8Array';

test('should decode authenticator extensions', () => {
  const extensions = decodeAuthenticatorExtensions(
    uint8Array.fromHex(
      'A16C6465766963655075624B6579A56364706B584DA5010203262001215820991AABED9D' +
      'E4271A9EDEAD8806F9DC96D6DCCD0C476253A5510489EC8379BE5B225820A0973CFDEDBB' +
      '79E27FEF4EE7481673FB3312504DDCA5434CFD23431D6AD29EDA63736967584730450221' +
      '00EFB38074BD15B8C82CF09F87FBC6FB3C7169EA4F1806B7E90937374302345B7A02202B' +
      '7113040731A0E727D338D48542863CE65880AA79E5EA740AC8CCD94347988E656E6F6E63' +
      '65406573636F70654100666161677569645000000000000000000000000000000000',
    ),
  );
  expect(extensions).toMatchObject({
    devicePubKey: {
      dpk: uint8Array.fromHex(
        'A5010203262001215820991AABED9DE4271A9EDEAD8806F9DC96D6DCCD0C476253A5510489EC8379BE5B225820A0973CFDEDBB79E27FEF4EE7481673FB3312504DDCA5434CFD23431D6AD29EDA',
      ),
      sig: uint8Array.fromHex(
        '3045022100EFB38074BD15B8C82CF09F87FBC6FB3C7169EA4F1806B7E90937374302345B7A02202B7113040731A0E727D338D48542863CE65880AA79E5EA740AC8CCD94347988E',
      ),
      nonce: uint8Array.fromHex(''),
      scope: uint8Array.fromHex('00'),
      aaguid: uint8Array.fromHex('00000000000000000000000000000000'),
    },
  });
});
