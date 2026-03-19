document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    if (!contactForm || !submitBtn) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btnText = submitBtn.querySelector('.btn-text');
        const originalText = btnText ? btnText.textContent : 'Kirim';

        submitBtn.disabled = true;
        if (btnText) btnText.textContent = 'Mengirim...';
        submitBtn.classList.add('btn-loading');

        try {
            const formData = new FormData(contactForm);

            const response = await fetch('api/contact.php', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.status === 'success') {
                Swal.fire({
                    icon: 'success',
                    title: 'Terkirim!',
                    text: result.message,
                    confirmButtonColor: 'var(--primary)',
                    background: 'var(--bg-card)',
                    color: 'var(--text-primary)'
                });
                contactForm.reset();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal',
                    text: result.message,
                    confirmButtonColor: 'var(--primary)',
                    background: 'var(--bg-card)',
                    color: 'var(--text-primary)'
                });
            }
        } catch (error) {
            console.error('AJAX Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Terjadi kesalahan jaringan. Coba lagi nanti.',
                confirmButtonColor: 'var(--primary)',
                background: 'var(--bg-card)',
                color: 'var(--text-primary)'
            });
        } finally {
            submitBtn.disabled = false;
            if (btnText) btnText.textContent = originalText;
            submitBtn.classList.remove('btn-loading');
        }
    });
});
