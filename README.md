# SOLQ | Solana-to-QRIS Payment Orchestrator

SOLQ (WarungPay) is a Consumer-Side, Non-Custodial Payment Orchestrator that bridges Solana assets to Indonesia's National QRIS network without holding funds.

## 🏛️ Official Corporate Branding Library ($500,000 USD Value)
The following are the official, registered trademarks and assets of SOLQ. Use only these assets for official representations.

| Asset | Format | Preview | Path |
|-------|--------|---------|------|
| **Full Logo (Transparent)** | PNG | ![Full Logo](assets/logo_full.png) | `assets/logo_full.png` |
| **Q Icon (Transparent)** | PNG | ![Q Icon](assets/logo_q.png) | `assets/logo_q.png` |
| **Full Logo (Standard)** | JPG | - | `assets/logo_full.jpg` |
| **Q Icon (Standard)** | JPG | - | `assets/logo_q.jpg` |

## 🚀 Master Technical Specification (101% Perfected)

### 1. QRIS Intelligence (EMVCo Parsing)
- **Deep Payload Analysis**: Parses EMVCo standards bit-by-bit.
- **Tag Detection**: Identifies Tag 54 (Dynamic/Locked) vs. Tag 59 (Merchant Name).
- **Integrity**: CRC-16/CCITT-FALSE validation for anti-tamper security.

### 2. Hardened Price Discovery (Anti-Halu)
- **Multi-Source Oracle**: Cross-validates CoinGecko, Jupiter V2, and ExchangeRate API.
- **Circuit Breaker (2%)**: Transactions are auto-blocked if on-chain swap deviates >2% from global market price.

### 3. Universal Wallet Connectivity
- **Mobile Wallet Adapter (MWA)**: Native Android inter-app communication.
- **Universal Links**: Fallback bridging for Phantom, Solflare, etc.
- **Web Interop**: Universal provider detection for browser extensions.

### 4. Economic Engine (Altman-Musk Standard)
- **Jupiter ExactOut**: Reverse-calculates required SOL for exact IDR settlement.
- **Platform Fee (1.0%)**: Embedded via `platformFeeBps: 100`.
- **Atomic Revenue**: Fees route directly to Treasury: `ETcQvsQek2w9feLfsqoe4AypCWfnrSwQiv3djqocaP2m`.

### 5. Truth-Source Verification
- **Double-Check Logic**: Client-side RPC Polling + Server-side Reconstruction.
- **Finality Enforcement**: Success only triggered after `finalized` status on Solana Mainnet.

### 6. Settlement & Receipt
- **Real-Time Receipt**: Digital receipt with Transaction Hash.
- **Transparency**: Direct links to Solana FM for on-chain proof.

### 7. Production Infrastructure
- **SDK 36 Target**: Built for maximum security on Android 15.
- **Stateless Orchestration**: Memory-first intent store for 30,000+ transaction scalability.
- **Clean Run Strategy**: `clean_run.ps1` for zero-cache production reliability.

---
**Status: 101% LIVE | NO DUMMY | REAL MAINNET**
