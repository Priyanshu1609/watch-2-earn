// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

/// @custom:security-contact rahuljaguste@gmail.com
contract Watch2Earn is
    ERC1155,
    Ownable,
    Pausable,
    ERC1155Burnable,
    ERC1155Supply
{
    // address public owner;

    mapping(uint256 => string) private _tokenURIs;

    // mapping(uint256 => uint256) private maxPerTokenSupply;

    constructor() ERC1155("ipfs://") {
        // transferOwnership(_owner);
    }

    function setURI(uint256 tokenId, string memory _tokenURI) public onlyOwner {
        _tokenURIs[tokenId] = _tokenURI;
    }

    function uri(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        return
            string(abi.encodePacked(super.uri(tokenId), _tokenURIs[tokenId]));
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data,
        string memory _tokenURI
    ) public onlyOwner {
        _tokenURIs[id] = _tokenURI;
        _mint(account, id, amount, data);
    }

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public onlyOwner {
        _mintBatch(to, ids, amounts, data);
    }

    // function withdrawAll(address to) public onlyOwner {
    //     to.transfer(this(address).balance)
    // }

    function _burn(
        address from,
        uint256 id,
        uint256 amount
    ) internal virtual override {
        super._burn(from, id, amount);

        if (bytes(_tokenURIs[id]).length != 0) {
            delete _tokenURIs[id];
        }
    }

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override(ERC1155, ERC1155Supply) {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    function withdraw(uint256 _amount) public payable onlyOwner {
        require(payable(msg.sender).send(_amount));
    }

    function withdrawAll() public payable onlyOwner {
        require(payable(msg.sender).send(address(this).balance));
    }
}
