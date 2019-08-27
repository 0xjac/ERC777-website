# ERC777
[![Website](https://img.shields.io/website/https/erc777.org?down_color=red&down_message=offline&style=flat-square&up_color=green&up_message=online)](https://erc777.org)
![Mozilla HTTP Observatory Grade](https://img.shields.io/mozilla-observatory/grade-score/erc777.org?publish&style=flat-square)
[![Content](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-blue.svg?style=flat-square&maxAge=3600)][cc]
[![License](https://img.shields.io/github/license/0xjac/ERC777.svg?style=flat-square&maxAge=3600)](https://github.com/0xjac/ERC777/blob/master/LICENSE)
[![EIP](https://img.shields.io/badge/EIP-777-lightgrey.svg?style=flat-square&maxAge=3600)][erc777]

*Source for [erc777.org][site], the official website of [ERC777][erc777].*

## Dependencies

- `npm`
- `hugo` (extended version) version 0.56 or above

## Instructions

1. Install dev dependencies:
   ``` shell
   npm install
   ```
   
2. Preview the website:
    ``` shell
    npm run develop
   ```
   
3. Build the website:
   ``` shell
   npm run build
   ```
   The build website will be available under `/public`.

## License

The source code is under the [Mozilla Public License ("MPL") 2.0](http://mozilla.org/MPL/2.0/),
also included in this repository in the [LICENSE](LICENSE) file.

The content of the website
(also contained in this repository under [`site/content`](site/content) and [`site/data`](site/data))
is licensed under [Creative Commons BY NC SA 4.0][cc].

## Next Steps

The following should be added to the website:

- Decentralized deployment
  - using swarm (ENS name required)
  - using zeronet on erc777.bit
  
- Add other implementnations, including (hopefully):
  - OpenZepplin
  - Vyper
  
- FAQ

- Code walk-through

- List of ERC777 tokens, ideally updated dynamically using ERC1820

*Feel free to help with any of the items above.  
If you are unsure about anything, feel free reach out to [@0xjac][0xjac] to avoid working on the wrong item.*

## Author
 - Jacques Dafflon [@0xjac][0xjac]

[site]: https://erc777.org
[erc777]: https://eips.ethereum.org/EIPS/eip-777
[cc]: (https://creativecommons.org/licenses/by-nc-sa/4.0/)
[0xjac]: https://github.com/0xjac