(function() {
    const threshold = 160;
    const warningUrl = 'https://www.facebook.com/vchinh.it'; // Thay đổi URL này thành URL của trang cảnh báo của bạn

    const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);

    const redirectToWarning = function() {
        console.log('Redirecting to warning page'); // Debug log
        window.location.href = warningUrl;
    };

    const detectDevTools = function() {
        if (isMobileDevice) {
            return; // Bỏ qua kiểm tra DevTools trên thiết bị di động
        }

        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {
            redirectToWarning();
        }
    };

    // Kiểm tra DevTools ngay khi trang được tải
    detectDevTools();

    // Thiết lập kiểm tra định kỳ mỗi 0.5 giây
    setInterval(detectDevTools, 500);

    document.addEventListener('keydown', function(event) {
        // Chặn F12
        if (event.key === "F12") {
            event.preventDefault();
            console.log('F12 Pressed - Blocked'); // Debug log
        }

        // Chặn Ctrl+Shift+I (DevTools)
        if (event.ctrlKey && event.shiftKey && event.key === 'I') {
            event.preventDefault();
            console.log('Ctrl+Shift+I Pressed - Blocked'); // Debug log
        }

        // Chặn Ctrl+U (Xem nguồn trang)
        if (event.ctrlKey && (event.key === 'U' || event.key === 'u')) {
            event.preventDefault();
            console.log('Ctrl+U Pressed - Blocked'); // Debug log
        }

        // Chặn Ctrl+Shift+C hoặc Ctrl+Shift+J (DevTools)
        if (event.ctrlKey && event.shiftKey && (event.key === 'C' || event.key === 'J')) {
            event.preventDefault();
            console.log('Ctrl+Shift+C/J Pressed - Blocked'); // Debug log
        }
    });

    // Chặn chuột phải
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        console.log('Right-click Blocked'); // Debug log
    });

    // Chặn hành vi chọn và sao chép
    document.addEventListener('copy', function(event) {
        event.preventDefault();
        console.log('Copy Blocked'); // Debug log
    });

    document.addEventListener('selectstart', function(event) {
        event.preventDefault();
        console.log('Text selection Blocked'); // Debug log
    });

    window.addEventListener('keyup', function(event) {
        // Chặn Ctrl+U (Xem nguồn trang)
        if (event.ctrlKey && (event.key === 'U' || event.key === 'u')) {
            event.preventDefault();
            console.log('Ctrl+U Released - Blocked'); // Debug log
        }
    });
})();
