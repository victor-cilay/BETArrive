<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_f46edf93863d3b442936435a321a91d9($e,$m){

    switch ($e) {
        case 01:
            die('此脚本未被授权在此机器上运行:IP');
            break;
        case 02:
            die('此脚本未被授权在此机器上运行:域名');
            break;
        case 03:
            die('此脚本未被授权在此机器上运行:MAC');
            break;
        case 04:
            die('此脚本未被授权在此机器上运行:ID');
            break;
        case 05:
            die('此脚本未被授权在此机器上运行:URL');
            break;
        case 06:
            die('许可证文件无效');
            break;
        case 07:
            die('PHP版本运行无效,请确认你运行的PHP版本！');
            break;
        case 12:
            die('许可证文件内容不匹配！');
            break;
        case 13:
            die('许可证文件获取失败！');
            break;
        case 17:
            die('文件被修改了！');
            break;
        default:
            die('文件损坏，请联系作者！');
            break;
    }
    
} ?><?php
return sg_load('E49C7E5A6A2F95DAAAQAAAAXAAAABNAAAACABAAAAAAAAAD/oIkDww2t4c07Kflsy84+NpE3q85R/JHL9AeoxkUOpUDsdIhkV1Zs9P+xkgRIETEIpoBvtadBEfV9qICA7svz+rrJNxQQqaksZuX/LbkPFsu8YK0sRZuL4LbHLnoBKWnoocezFlBOeTVsvaoLNaC19jSrBjDnpX+ToTgbzRvVOx6/3bqRHx1IWVxcIfQqKPtzJVrrfGRThdAFL0Ra1BkRzQVGpbbJuwNZgiXTt0yN2Vgeig3o/jEYo6JBIo4iqTn5GyUwo3A8BY54oivhjI1cQgcAAAA4AgAAIxmbac6A8v1UZwwXlWlLIRikNbTPyyM5c9fkRq+94rhJEmXhm9faoViPz1J4XjZ6jikP+Kp4bVpo4SY17yN58do71BL7p/ptixler4NyLAUlQK7jhkZiYxHHrjLWFTUSViRo5exYBW7sTgMhYRrMNOyNIs83yV1XbzaJL/4/bcD2+EADofuslGeOquZJRJBaYH19zFUIQG4OZ36TwgJ+O3KSIVCv7dNGf65AY1uVgyM0WZ/37PlnmFQkSHHwscmZf6y9ALMuBeOgucS3VduA7eCxjZSQCrUpwnerT9cEzfMwjE3i7zAy1dWuYlHFeQdBaK9dddxIlLg7lu0xZ1/ADHXzo1as4OkJ8Cbt6J2MUvdBmHHLhHofI8RXj1oyT2pdzFInPrDunvpIqo9IfEX6kkuBQfnCl96Uotw9xkCo2p6wePXwglgm6RVT+ciHk+JT1hf7uVN2g/LXvZe6RgJAc4QWy3LcWu549n9gV9vQkk2avfE2ESYHRuZOlHrA0edYmUZ5AtVxL+XTG+fZoIwsQW0Fet7VHvbbax5KmaIIGaTUkItO1dNXyFaWdG6aVoJikXkalUgQOpOyB3GkRk1N4ZprCH2DdUdHjDHiUcTtic9tWBBUWPJ0pVTj9+FkIWWaGPrxgRd5wRZZCiwyBCRg5hPp+ss5nwg9aKqFiu9Ulx8mMhYH3hhC+OaSrV4m0ucGAd9T/gnqFcpv8lFgn+IIM3GrQG+73501rTa47YnK1zTOh7iaAuvyikcAAAA4AgAA9mrt2KFnevIybcYqeBJYoQvajqTazfnm8wzjS8PhLNxEqNkc0XGOl+eljBpa5RK6qRJjFWfMcGijMwU8cyBd7ZkYDZySWMSN58q3n93BvJE346IgixLtxyBzuQ9/XjLNyFW3nFDiE2sPlF3jPzCeDB9Izih/G4Ppidv869I77n9BTF7FWms+X7BBxEEspRNIEYMS4pdriFMRpYI3px0zyGJ1r3QmbpCht6fpfguXJrLDr0hGxN6IQSdFqAKmpyKMkHbwp0bOEIRmvmX3+kt8E4H8eNACCyx7o8MVhAOrwQnPrb4SlNO+SH5SsBjkMFL/1wIFQVL31f7JKiR1Ex99PAcL8H5xyZPiH1CpmvcDYofRCPGylk0RbyFGRWvEFFW53XAC2/Hf+vDNEU9OWCppQDYAjt0EjGrhxQpaiy2uDYcySy1DVGZe0R77ClgwoijpsTDVHjMQ7MPqTV66kx2SyhNO833H+yfLg4KoELQvW436aYUWmrlvAUAGji/Od/LZXtmwmUmjvsTAWJmrd02a17pujgutg9/md6rGmArx45nPyJpl7FNIFhihQlT0NmdFUZ9lLgh/u+oGy3SICIYhrOcpvNlaIbIushqm/dMMcUq2/s+WMpIeMGRb6oGF147WyT/5vV/vBZpb8AiVo6+o8bxl+rVav12eKSxJE6+oIvobnXXdlYzbnFkKBcTpwhwJdbU+r9MSpnpcj8JCPcN91VKYMI6fCh4gDt3mQE+5efAb6F3EpkCC8EgAAAA4AgAAqO4ceFt/IG/G0Y8CLHjCJNiakm9Tr39oIcWPjCa9LE1VJxnaOUI1ZIOF0LsSOhyZ0sWnm7Hg66VIKXKQfOFZgS5YNsyI7BzU30KFJtP3lyC2YCUioVSGEJwWvisPkcooGTJMNIsK6SYc2HhT6RI1KwiDYQEKayoESCRtoe/GvQ4i8GCxeTch3T0g0rgsKXozMbEJ/e6UNGeEL1FyxWvJO+xV8JWBKPif9NwCswU9z6MOCP++9FYY6L5uefmVhhDDoPGc4bZMR+jS/7p/tT899r8nk9GYhybBzpT8hH7Tkiw764NOdKkS3LO2QJtq2XvlPQ+HDHPSSD8zzd24tBlRJ+BAp4IxF2xvZxta0qIvSUsSy+zYXiBor1kWALR8XPfSZACu0FddEyVuAML1WOhJDA4ZSas3ajSbwZlMpm0FOHqW2VQp1xlaavaP7fKL9pYK+ZBp+DvokAMvgNRH9pdNLkfGJ+riVzqZcqNiHzSApUKLi4X2EwTBb+uuDfjuwAFdj4W/Gi6ZnTsZiVxb9h8mDHIL/RNBDuWC9NNeU9lvb+ax/YMG0gvHmGwHYIRdwZUWUpFn4gOr+jCbWIIcQH47gckeNN10HWPDhkEtRkmptMjTlnk24uEjHOBhI7IWk5TNYr4m4XJ9e/mARiCpclpA3i+B0DDlhigut03ovXNWBfHOOvfaUHGNsVqCzuVKl9FkkKXamEHnfUhYSmH+Q5kd0Wu0DoHtTM5LtAGr7tZk4qdss7jZVenu/kkAAAAwAgAAEbOUYDw6Kj5TbYQ6cuFiop2KwkY6Oj0sCDgNWiflo3Tqb5+6OGJWw1UYmf6TC7A0YXCkWWbdD7eGOQM3urhZOS2+ElPzfEQYKmXtFA/wbAEfN4Ox2ffr+H9JZippATrjqUuH2+O51ptCd4++qMxy8xutVhzQpwarcaEcCdWEKctfdSkQKoL7uEgZ/jA9hO8SyIF+d9VzNajo5CNj8Iia0jhlf5NQeaR+BVJoSuTYJs2jlFMnVGk7dC69nq0jLuAPd4f1repUxN/7j8JxB23jUH3Ei/71ubbHtGBb/MVCzjiGdjcqDn9ez2YKGjJicyNH5z3NFnPvOMKdLl3FZmvIRpDbIcVMemUuVdiiVZWheWrYOocc3iWDNjGh61CMSPzagZAWWPZScmhDnOV19Pyvl57gllFZUNnodMeHcnc1iJ3fNJSHl/OsjNDhd+P0JzZiztKnKz2UAGm0Ah9jMxf6fW8ZEsPjIRmXkhH6SSmqXWHbUBapDMpY6sxBiPGfkjksRU4x11nuT6obfG0bAFP3AZerMpGhAf2MVdBf8LJXlDO0zkiX8oAX7hl9KnbQ5N7f7pAoNWj5BtpFEqFRtbDgycULIkLMvQ1ochK8d4vbHG20G7eXl0KaUENEJ/LaZh9PWfrWUcpmwkFnolKBfZ6V7a52+0bOmKc+whpCXk669KMTJHRGum6BDSLq/lt3jECdCm0sPjsXWk87BXxl5k66h2npBj9h4KIcwgzHhV/2HM9KAAAAMAIAALvmJu83JR/16KcMoG/VgHiIlI6o8ztO1/7VxQcBzx4y5DPN/M3LArHXNfFJsza6l7lRbkbp6rOHsh/Ljeb+bq8AtR9fdZ1vT4z3RKxWjiBZzCovM79XOaAmMiS/qOfxp9BlhnNoLTIzujq0yPDfvTcSpH4GfJ7x7N35II7GWLqSUDu4cZswoIdXhEDh6rrcRa8n1QBqvjln9JomiZcAeCGTsu6PXSPyh2Ew0K1Wma8TLGV7U28RI4JrFfs9tpB1Gdp0Cfzig+gwY24J3h1cDCOfLfHEsAW1lF+KVbIUV5bbEd8psj+2G1PWkvvmDm8Z/p5sMQgQjZQ5arllAIKAH1z2o4cM2hEa+jx7b3BWNFOmtSkqIsSd/Gj9E6wYUC4LwvjABu89AQv6mwyZbxEgtaA2dO4S7B6XxtNNUzBlrX8Vw5WgVx2eZM6Bh+JAY06SERTtoxZgrnZF2WNMEhqs77mgUEce2V9nCiSg9LaWlOzFlE6zZwZxfsBHbeKZzhYJ2SMh0ehCY2NUCD7tFm2shytAJqStVV8qYG6r0RAhSXoA31EK+vHih5HYlFucWpKpZkmRbsZFDqLctjcN7sGyIUvarqbyfwzA3q/qxBGVp7fcPdEJfiD9kUPMldq1wLriWNxaYURmrAynIHujkG4uwQY/MMT6H68L2gPyum5oLSsuMmlbDCDwJ0kBTcrlvLu2JKN82CUiITcQuX2GoF1Jq9hqTmMlaCSin6nS++1erzGJAAAAAA==');
