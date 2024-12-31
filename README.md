# NEOX Prediction Market Platform

> A decentralized prediction market platform built on NEOX blockchain where users can create, trade, and settle prediction markets using ERC20 tokens.

## Overview

NEOX Prediction Market is a decentralized application (dApp) that enables users to participate in prediction markets by buying shares in different outcomes. The platform uses smart contracts to ensure transparent and trustless execution of market creation, trading, and settlement.

## Problem Statement

Traditional prediction markets face several challenges:
- Lack of transparency in market settlement
- High fees and intermediary costs
- Limited accessibility and geographical restrictions
- Centralized control and potential manipulation
- Complex regulatory compliance requirements

## Solution

NEOX Prediction Market solves these challenges by:
- Implementing fully transparent smart contracts for market operations
- Eliminating intermediaries through blockchain technology
- Providing global accessibility to prediction markets
- Ensuring decentralized and automated market settlement
- Using ERC20 tokens for betting to enhance liquidity

## Features

### Frontend Features
- Modern, responsive UI built with Next.js
- Real-time market data updates
- Seamless wallet integration
- User-friendly market participation interface
- Detailed market statistics and analytics
- Mobile-responsive design

### Smart Contract Features

1. **Market Creation**
   - Owner-controlled market creation
   - Customizable market questions and options
   - Flexible duration settings
   - Structured market parameters

2. **Trading Mechanism**
   - Binary outcome markets (Option A/B)
   - ERC20 token-based trading
   - Real-time share price calculations
   - Automated trading execution

3. **Settlement & Claims**
   - Secure market resolution system
   - Automated winning calculation
   - Proportional reward distribution
   - Batch claiming functionality

4. **Security Features**
   - Reentrancy protection
   - Owner-controlled critical functions
   - Precise mathematical calculations
   - State validation checks

## Use Cases

1. **Financial Markets**
   - Cryptocurrency price predictions
   - Stock market movements
   - Economic indicator forecasts

2. **Sports Betting**
   - Match outcomes
   - Tournament winners
   - Player performance metrics

3. **Political Events**
   - Election outcomes
   - Policy implementation predictions
   - Political appointment forecasts

4. **Social Events**
   - Entertainment awards
   - Celebrity events
   - Social media trends

## Smart Contract Architecture

### Core Components

1. **Market Structure**
```solidity
struct Market {
    string question;
    uint256 endTime;
    MarketOutcome outcome;
    string optionA;
    string optionB;
    uint256 totalOptionAShares;
    uint256 totalOptionBShares;
    bool resolved;
    mapping(address => uint256) optionASharesBalance;
    mapping(address => uint256) optionBSharesBalance;
    mapping(address => bool) hasClaimed;
}
```

2. **Key Functions**
- `createMarket`: Create new prediction markets
- `buyShares`: Purchase shares in market outcomes
- `resolveMarket`: Settle market results
- `claimWinnings`: Claim rewards for winning positions
- `batchClaimWinnings`: Batch process multiple claims

## Getting Started

1. **Prerequisites**
   - Node.js
   - Yarn/NPM
   - MetaMask or compatible Web3 wallet

2. **Installation**
```bash
# Clone the repository
git clone 

# Install frontend dependencies
cd frontend
yarn install

# Install contract dependencies
cd neox-contracts
yarn install
```

3. **Running the Application**
```bash
# Start frontend development server
cd frontend
yarn dev

# Deploy contracts (requires proper network configuration)
cd neox-contracts
yarn deploy
```

## Technical Stack

- **Frontend**: Next.js, TypeScript, thirdweb
- **Smart Contracts**: Solidity, Hardhat
- **Blockchain**: NEOX Network
- **Token Standard**: ERC20

## Security Considerations

- Smart contract audited for security vulnerabilities
- Implements reentrancy guards
- Owner-controlled critical functions
- Precise mathematical calculations to prevent rounding errors
- Comprehensive input validation

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the UNLICENSED License - see the LICENSE file for details.
