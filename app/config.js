var config = {
    salvarDados: true,
    debug: false,
    waterMark: false,
    language: 'pt-br',
    video: 'default',
    lms: {
        name: 'default'
    },
    acessibility: {
        tools: false,
        outlines: false,
        vlibras: false,
        customLibras: false
    },
    behaviors: {
        adaptive: false,
        width: 1920,
        height: 1080,
        fontSize: 30
    },
    modalVoltar: {
        active: false,
        msg: 'Você quer continuar de onde parou ou reiniciar o curso?',
        yes: 'CONTINUAR',
        no: 'REINICIAR',
        color: '#0a698d'
    },
    pages: [{
            uid: 'pag01',
            src: 'pag01/index.html'
        },
        {
            uid: 'pag01 copy',
            src: 'pag01 copy/index.html'
        },
        {
            uid: 'pag02',
            src: 'pag02/index.html'
        },
        {
            uid: 'pag03',
            src: 'pag03/index.html'
        },
        {
            uid: 'pag04',
            src: 'pag04/index.html'
        },
        {
            uid: 'pag05',
            src: 'pag05/index.html'
        },
        {
            uid: 'pag05a',
            src: 'pag05a/index.html'
        },
        {
            uid: 'pag05b',
            src: 'pag05b/index.html'
        },
        {
            uid: 'pag05c',
            src: 'pag05c/index.html'
        },
        {
            uid: 'pag05d1',
            src: 'pag05d1/index.html'
        },
        {
            uid: 'pag05d2',
            src: 'pag05d2/index.html'
        },
        {
            uid: 'pag06a',
            src: 'pag06a/index.html'
        },
        {
            uid: 'pag06b',
            src: 'pag06b/index.html'
        },
        {
            uid: 'pag06c',
            src: 'pag06c/index.html'
        },
        {
            uid: 'pag07a',
            src: 'pag07a/index.html'
        },
        {
            uid: 'pag07b',
            src: 'pag07b/index.html'
        },
        {
            uid: 'pag07c',
            src: 'pag07c/index.html'
        },
        {
            uid: 'pag08a',
            src: 'pag08a/index.html'
        },
        {
            uid: 'pag08b',
            src: 'pag08b/index.html'
        },
        {
            uid: 'pag08c',
            src: 'pag08c/index.html'
        },
        {
            uid: 'pag08d',
            src: 'pag08d/index.html'
        },
        {
            uid: 'pag08e',
            src: 'pag08e/index.html'
        },
        {
            uid: 'pag08f',
            src: 'pag08f/index.html'
        },
        {
            uid: 'pag08g',
            src: 'pag08g/index.html'
        },
        {
            uid: 'pag08h',
            src: 'pag08h/index.html'
        },
        {
            uid: 'pag08i',
            src: 'pag08i/index.html'
        },
        {
            uid: 'pag08j',
            src: 'pag08j/index.html'
        },
        {
            uid: 'pag08k',
            src: 'pag08k/index.html'
        },
        {
            uid: 'pag09',
            src: 'pag09/index.html'
        }
    ]
};
try {
    module.exports = config;
} catch (e) {}