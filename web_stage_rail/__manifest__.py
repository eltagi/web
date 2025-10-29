# -*- coding: utf-8 -*-
{
    'name': 'Web Stage Rail',
    'version': '18.0.1.0.0',
    'summary': 'Adds a reusable vertical stage rail component to form views.',
    'category': 'Extra Tools',
    'author': 'Eng. Mohamed Abdalla',
    'depends': ['web', 'mail'],
    'assets': {
        'web.assets_backend': [
            'web_stage_rail/static/src/scss/stage_rail.scss',
            'web_stage_rail/static/src/components/stage_rail/stage_rail.xml',
            'web_stage_rail/static/src/components/stage_rail/stage_rail.js',
            'web_stage_rail/static/src/xml/form_renderer.xml',
            'web_stage_rail/static/src/js/form_renderer.js',
        ],
    },
    'installable': True,
    'application': False,
    'license': 'LGPL-3',
}
