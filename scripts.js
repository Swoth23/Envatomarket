document.addEventListener('DOMContentLoaded', () => {
    // Wallet Connection
    const connectWalletBtn = document.getElementById('connectWalletBtn');
    connectWalletBtn.addEventListener('click', async () => {
        if (window.ethereum) {
            try {
                const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                console.log('Connected to:', accounts[0]);
            } catch (error) {
                console.error('User denied wallet connection:', error);
            }
        } else {
            alert('Please install MetaMask!');
        }
    });

    // Modal Management
    const liquidityModal = document.getElementById('liquidityModal');
    const swapModal = document.getElementById('swapModal');
    const addLiquidityBtn = document.getElementById('addLiquidityBtn');
    const swapTokensBtn = document.getElementById('swapTokensBtn');
    const closeBtns = document.querySelectorAll('.modal .close');

    addLiquidityBtn.addEventListener('click', () => {
        liquidityModal.style.display = 'flex';
    });

    swapTokensBtn.addEventListener('click', () => {
        swapModal.style.display = 'flex';
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            liquidityModal.style.display = 'none';
            swapModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === liquidityModal) {
            liquidityModal.style.display = 'none';
        }
        if (event.target === swapModal) {
            swapModal.style.display = 'none';
        }
    });

    // Countdown Timer
    const countdownTimer = document.getElementById('countdownTimer');
    const targetDate = new Date('2024-12-31T00:00:00').getTime();
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        if (distance < 0) {
            clearInterval(countdown);
            countdownTimer.innerHTML = 'Presale Ended';
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);

    // Add Liquidity and Swap Tokens functionality goes here
    // Use web3.js to interact with smart contracts
});
