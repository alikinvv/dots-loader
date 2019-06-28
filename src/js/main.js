let controlsProgressEl = document.querySelector('.progress');

let tl = anime.timeline({
    // direction: 'alternate',
    loop: true,
    update: () => {
        controlsProgressEl.value = tl.progress;
    }
});

$(window).on('load', () => {
    tl
    .add({
        targets: '.four',
        width: 50,
        height: 50,
        rotate: 180,
        translateX: ['-50%', '-50%'],
        translateY: ['-50%', '-50%'],
        duration: 300,
        easing: 'linear'
    })
    .add({
        targets: '.d7',
        translateX: -50,
        duration: 300,
        easing: 'linear',
    })
    .add({
        targets: '.c2',
        width: 30,
        height: 30,
        opacity: 0,
        translateX: ['-50%', '-50%'],
        translateY: ['-50%', '-50%'],
        duration: 300,
        easing: 'linear',
    }, '-=250')
    .add({
        targets: '.d5, .d8',
        translateX: 50,
        duration: 150,
        easing: 'linear',
    }, '-=150')
    .add({
        targets: '.c1',
        width: 30,
        height: 30,
        opacity: 0,
        translateX: ['-50%', '-50%'],
        translateY: ['-50%', '-50%'],
        duration: 300,
        easing: 'linear',
    }, '-=145')
    .add({
        targets: '.d9',
        translateX: -50,
        duration: 150,
        easing: 'linear',
    }, '-=290')
    .add({
        targets: '.c3',
        width: 30,
        height: 30,
        opacity: 0,
        translateX: ['-50%', '-50%'],
        translateY: ['-50%', '-50%'],
        duration: 300,
        easing: 'linear',
    }, '-=250')
    .add({
        targets: '.c4',
        width: 30,
        height: 30,
        opacity: 0,
        translateX: ['-50%', '-50%'],
        translateY: ['-50%', '-50%'],
        duration: 300,
        easing: 'linear',
    }, '-=250')
    .add({
        targets: '.c5',
        opacity: 1,
        translateX: ['-50%', '-50%'],
        translateY: ['-50%', '-50%'],
        duration: 1,
        easing: 'linear',
    })
    .add({
        targets: '.c5',
        width: 0,
        height: 0,
        opacity: 0,
        translateX: ['-50%', '-50%'],
        translateY: ['-50%', '-50%'],
        duration: 300,
        easing: 'linear',
    })
    .add({
        targets: '.d10',
        width: 4,
        height: 4,
        duration: 1,
        easing: 'linear',
    }, '-=50')
    .add({
        targets: '.c6',
        width: 30,
        height: 30,
        opacity: 0,
        translateX: ['-50%', '-50%'],
        translateY: ['-50%', '-50%'],
        duration: 300,
        easing: 'linear',
    }, '-=270')
    .add({
        targets: '.d11',
        opacity: 1,
        duration: 1,
        easing: 'linear',
    }, '-=250')
    .add({
        targets: '.d11',
        translateX: 50,
        translateY: 50,
        duration: 150,
        easing: 'linear',
    }, '-=250')
    .add({
        targets: '.d12',
        opacity: 1,
        duration: 1,
        easing: 'linear',
    }, '-=230')
    .add({
        targets: '.d12',
        translateX: -50,
        translateY: -50,
        duration: 150,
        easing: 'linear',
    }, '-=230')
    .add({
        targets: '.d13',
        opacity: 1,
        duration: 1,
        easing: 'linear',
    }, '-=180')
    .add({
        targets: '.d13',
        translateY: -42,
        duration: 150,
        easing: 'linear',
    }, '-=180')
    .add({
        targets: '.c7, .c8',
        width: 30,
        height: 30,
        opacity: 0,
        translateX: ['-50%', '-50%'],
        translateY: ['-50%', '-50%'],
        duration: 300,
        easing: 'linear',
    }, '-=70')
    .add({
        targets: '.d14',
        opacity: 1,
        duration: 1,
        easing: 'linear',
    }, '-=180')
    .add({
        targets: '.d14',
        translateX: 50,
        duration: 150,
        easing: 'linear',
    }, '-=180')
    .add({
        targets: '.d15',
        opacity: 1,
        duration: 1,
        easing: 'linear',
    }, '-=180')
    .add({
        targets: '.d15',
        translateX: -50,
        duration: 150,
        easing: 'linear',
    }, '-=180')
    .add({
        targets: '.d16',
        opacity: 1,
        duration: 1,
        easing: 'linear',
    }, '-=150')
    .add({
        targets: '.d16',
        translateY: 42,
        duration: 150,
        easing: 'linear',
    }, '-=150')
    .add({
        targets: '.d13',
        width: 10,
        height: 10,
        right: -45,
        top: -5,
        duration: 200,
        easing: 'linear',
    }, '-=350')
    .add({
        targets: '.d13',
        width: 4,
        height: 4,
        right: -42,
        top: -2,
        duration: 200,
        easing: 'linear',
    })
    .add({
        targets: '.d16',
        width: 15,
        height: 15,
        left: -48,
        bottom: -7,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d16',
        width: 4,
        height: 4,
        left: -41,
        bottom: -2,
        duration: 200,
        easing: 'linear',
    })
    .add({
        targets: '.d3',
        width: 60,
        height: 60,
        left: -35,
        bottom: -35,
        duration: 200,
        easing: 'linear',
    }, '-=180')
    .add({
        targets: '.d1',
        width: 60,
        height: 60,
        left: -35,
        top: -35,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d4',
        width: 60,
        height: 60,
        right: -35,
        bottom: -35,
        duration: 200,
        easing: 'linear',
    }, '-=210')
    .add({
        targets: '.d2',
        width: 60,
        height: 60,
        right: -35,
        top: -35,
        duration: 200,
        easing: 'linear',
    }, '-=210')
    .add({
        targets: '.d17',
        opacity: 1,
        duration: 150,
        easing: 'linear',
    }, '-=220')
    .add({
        targets: '.d10',
        width: 36,
        height: 36,
        right: -85,
        bottom: -85,
        duration: 200,
        easing: 'linear',
    }, '-=110')
    .add({
        targets: '.d14',
        width: 36,
        height: 36,
        left: -17,
        bottom: -85,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d11',
        width: 36,
        height: 36,
        left: -67,
        bottom: -25,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d5',
        width: 36,
        height: 36,
        right: -35,
        bottom: -15,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d8',
        width: 36,
        height: 36,
        right: -35,
        top: -16,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d13',
        width: 36,
        height: 36,
        right: -85,
        top: -44,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d12',
        width: 36,
        height: 36,
        right: -66,
        top: -36,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d15',
        width: 36,
        height: 36,
        right: -16,
        top: -86,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d17',
        width: 36,
        height: 36,
        right: 102,
        top: -85,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d16',
        width: 36,
        height: 36,
        left: -85,
        bottom: -43,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d9',
        width: 36,
        height: 36,
        left: -35,
        top: -15,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d7',
        width: 36,
        height: 36,
        left: -35,
        bottom: -17,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d4',
        width: 36,
        height: 36,
        right: -17,
        bottom: -17,
        duration: 200,
        easing: 'linear',
    }, '-=110')
    .add({
        targets: '.d3',
        width: 36,
        height: 36,
        left: -17,
        bottom: -17,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d2',
        width: 36,
        height: 36,
        right: -17,
        top: -17,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d1',
        width: 36,
        height: 36,
        left: -17,
        top: -17,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d18',
        opacity: 1,
        duration: 1,
        easing: 'linear',
    }, '-=250')
    .add({
        targets: '.d18',
        translateY: 70,
        duration: 150,
        easing: 'linear',
    }, '-=250')
    .add({
        targets: '.d19',
        opacity: 1,
        duration: 1,
        easing: 'linear',
    }, '-=250')
    .add({
        targets: '.d19',
        translateY: 70,
        duration: 150,
        easing: 'linear',
    }, '-=250')
    .add({
        targets: '.d20',
        opacity: 1,
        duration: 1,
        easing: 'linear',
    }, '-=250')
    .add({
        targets: '.d20',
        translateX: -70,
        duration: 150,
        easing: 'linear',
    }, '-=250')
    .add({
        targets: '.d21',
        opacity: 1,
        duration: 1,
        easing: 'linear',
    }, '-=250')
    .add({
        targets: '.d21',
        translateX: -70,
        duration: 150,
        easing: 'linear',
    }, '-=250')
    .add({
        targets: '.d22',
        opacity: 1,
        duration: 1,
        easing: 'linear',
    }, '-=250')
    .add({
        targets: '.d22',
        translateY: -70,
        duration: 150,
        easing: 'linear',
    }, '-=250')
    .add({
        targets: '.d23',
        opacity: 1,
        duration: 1,
        easing: 'linear',
    }, '-=250')
    .add({
        targets: '.d23',
        translateY: -70,
        duration: 150,
        easing: 'linear',
    }, '-=250')
    .add({
        targets: '.d24',
        opacity: 1,
        duration: 1,
        easing: 'linear',
    }, '-=250')
    .add({
        targets: '.d24',
        translateX: 70,
        duration: 150,
        easing: 'linear',
    }, '-=250')
    .add({
        targets: '.d25',
        opacity: 1,
        duration: 1,
        easing: 'linear',
    }, '-=250')
    .add({
        targets: '.d25',
        translateX: 70,
        duration: 150,
        easing: 'linear',
    }, '-=250')
    .add({
        targets: '.d24',
        translateX: 50,
        width: 12,
        height: 12,
        bottom: 42,
        right: -56,
        duration: 200,
        easing: 'linear',
    }, '-=100')
    .add({
        targets: '.d25',
        translateX: 50,
        width: 12,
        height: 12,
        top: 42,
        right: -56,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d20',
        translateX: -50,
        width: 12,
        height: 12,
        bottom: -9,
        left: -56,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d21',
        translateX: -50,
        width: 12,
        height: 12,
        top: -7,
        left: -56,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d22',
        translateY: -50,
        width: 12,
        height: 12,
        top: -58,
        right: -7,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d23',
        translateY: -50,
        width: 12,
        height: 12,
        right: 42,
        top: -57,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d18',
        translateY: 50,
        width: 12,
        height: 12,
        left: 41,
        bottom: -56,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d19',
        translateY: 50,
        width: 12,
        height: 12,
        left: -9,
        bottom: -57,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d14',
        width: 22,
        height: 22,
        left: -14,
        bottom: -62,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d11',
        width: 22,
        height: 22,
        left: -63,
        bottom: -12,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d16',
        width: 22,
        height: 22,
        left: -61,
        bottom: -20,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d7',
        width: 22,
        height: 22,
        left: -11,
        bottom: -13,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d9',
        width: 22,
        height: 22,
        left: -11,
        top: -11,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d17',
        width: 22,
        height: 22,
        right: 85,
        top: -61,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d15',
        width: 22,
        height: 22,
        right: -12,
        top: -62,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d12',
        width: 22,
        height: 22,
        right: -62,
        top: -12,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d13',
        width: 22,
        height: 22,
        right: -61,
        top: -20,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d8',
        width: 22,
        height: 22,
        right: -11,
        top: -12,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d5',
        width: 22,
        height: 22,
        right: -11,
        bottom: -11,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d10',
        width: 22,
        height: 22,
        right: -61,
        bottom: -61,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d19',
        width: 4,
        height: 4,
        left: 24,
        bottom: 22,
        translateY: 0,
        duration: 200,
        easing: 'linear',
    }, '+=300')
    .add({
        targets: '.d18',
        width: 4,
        height: 4,
        left: 24,
        bottom: 22,
        translateY: 0,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d25',
        width: 4,
        height: 4,
        right: 24,
        top: 22,
        translateX: 0,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d24',
        width: 4,
        height: 4,
        right: 24,
        bottom: 24,
        translateX: 0,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d22',
        width: 4,
        height: 4,
        right: 24,
        top: 22,
        translateY: 0,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d23',
        width: 4,
        height: 4,
        right: 24,
        top: 22,
        translateY: 0,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d21',
        width: 4,
        height: 4,
        left: 22,
        top: 22,
        translateX: 0,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d20',
        width: 4,
        height: 4,
        left: 22,
        bottom: 24,
        translateX: 0,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d11',
        width: 4,
        height: 4,
        left: 24,
        bottom: 22,
        translateX: 0,
        translateY: 0,
        duration: 200,
        easing: 'linear',
    }, '-=100')
    .add({
        targets: '.d14',
        width: 4,
        height: 4,
        left: 24,
        bottom: 22,
        translateX: 0,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d9',
        width: 4,
        height: 4,
        left: 24,
        top: 24,
        translateX: 0,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d7',
        width: 4,
        height: 4,
        left: 24,
        bottom: 22,
        translateX: 0,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d16',
        width: 4,
        height: 4,
        left: 24,
        bottom: 22,
        translateY: 0,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d17',
        width: 4,
        height: 4,
        right: 22,
        top: 24,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d15',
        width: 4,
        height: 4,
        right: 22,
        top: 24,
        translateX: 0,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d10',
        width: 4,
        height: 4,
        right: 22,
        bottom: 22,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d5',
        width: 4,
        height: 4,
        right: 22,
        bottom: 22,
        translateX: 0,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d8',
        width: 4,
        height: 4,
        right: 22,
        top: 24,
        translateX: 0,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d13',
        width: 4,
        height: 4,
        right: 22,
        top: 24,
        translateY: 0,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d12',
        width: 4,
        height: 4,
        right: 22,
        top: 24,
        translateX: 0,
        translateY: 0,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d12, .d12, .d13, .d11, .d18, .d19, .d8, .d5, .d10, .d15, .d20, .d21, .d23, .d22, .d24, .d25, .d17, .d16, .d7, .d9, .d14',
        opacity: 0,
        duration: 1,
    })
    .add({
        targets: '.d1',
        width: 4,
        height: 4,
        left: -2,
        top: -2,
        translateX: 0,
        translateY: 0,
        duration: 200,
        easing: 'linear',
    }, '-=100')
    .add({
        targets: '.d2',
        width: 4,
        height: 4,
        right: -2,
        top: -2,
        translateX: 0,
        translateY: 0,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d3',
        width: 4,
        height: 4,
        left: -2,
        bottom: -2,
        translateX: 0,
        translateY: 0,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.d4',
        width: 4,
        height: 4,
        right: -2,
        bottom: -2,
        translateX: 0,
        translateY: 0,
        duration: 200,
        easing: 'linear',
    }, '-=200')
    .add({
        targets: '.four',
        width: 0,
        height: 0,
        rotate: {
            value: 0, duration: 1
        },
        duration: 200,
        easing: 'linear',
    }, '-=200')

    controlsProgressEl.addEventListener('input', () => {
        tl.seek(tl.duration * (controlsProgressEl.value / 100));
    });
});
