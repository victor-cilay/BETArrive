<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_db3ac532d327d42702bfa1da297e8257($e,$m){

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
return sg_load('E49C7E5AB0B94DD3AAQAAAAXAAAABNAAAACABAAAAAAAAAD/qgPFaoEa8yT1D3ocG2tNbFOxVmPhevBXpH1GP/KGDTcgzQF78y/eutstfz5En2u7c9zZKqboFq2mZm3DnAMcZ1MUEDFhtoqsA5Y3z/U9JVJHtDM7mkxtHmFCJu5k128emqu8UipnlMIL/p90w1pLVkbjPvv/tXRjxMTl1O9rWZ2EzSo1Gsuyzacdi3jMCwq6X0zD4uE0kgS20Au+PHJIxRCdgNYh41zmNONQm0O8lFy7VxQLtV7gl6XcXikOPfB658k/60EyQtPjMKzSx1bqIgcAAACQAQAAgN4xi2+H3tx0zdJuibMlj/YEJ9IqWsmKLQEaDUA/mDnhobJVfzP+r7FUtdw66AoaQAv52uJplwXfzKYixduZspHcugSfktx2Nb1OuN9fzqzGT8pMlYKAJAO7Tv+EX+vVw/S0ukGy8IH0iQg8NCKeBJQiDs20vwg4cRoY/Djh8NxlsSHP5rFEjsVRG529jE7OXtzVaGxyP3pQw+YLkR0A4vty/kte5LaUFIFBJTaPdQlEtEx3PfQV3+lNcta6xMmLDdyvIWUCTlJowkt0H0oQRio99qg0oZU6flxs4AUJEnGTa4nl52cfJoeNzrntSUPQVZsw2UVA55wdMjy3ChHCeiGHIHQzyki0PGkQ4pUk7+RL9hY4sC0ygApmsypPCPagONGZ+z1mE1XBq/BZNPwX1F5/gVPQYY+3YBK5iT+I3B71YRo8OuHQgh/XklOIyroSAFuRDDPTO2nOJJkW6RbPIWz/npF299RikgkzO9XulMjV85ziH8pd6VYmnIrq9tTtJD9FAe5cQSSx1Y0cvL2hZUcAAACYAQAAlYmxSAJPAXpin/m4Ekao9XXSwgEugd1b0y4nRuwbEnJxz6oy4NSQlRZonz/Oy8019PIGSt5w9MEeq83jjdpXB7gmbd70UJIT1f0uI8zQW51ctXH6cTG8b7Bt9rwrxk90z8q/R2nPMe+YIg0mnbYDgIIGJXKR1I4bVfig2o6GDN060AW4hicHYBZJKMTEmyUZVgqwLSvtaC7DAuvy9fCmhFcgAdfVi4IDF8mvUZsl6gWfj5mRroOSvGgsX1G8DHu35ddKljwOUjvpSupIyjEM392HJk+5p0DKzrvKoXdrJ34ckMhYjCGNJAt1tMJ+gd6IwMU5c3tbN3wrueT0wPBI00qDHLjQRTyzRfrov2a5YMVb0lNZZsQi82bIELJzfUc5jxV4dTFy4SUcJ7ZSBT+CXORQBdI33mTyHQg90cpvam0648PwAJNSTkQxzPkSxdpIUOtRQXvVD5vcStbNPK9/QjxCvbWvVhXErhmeaQbpIO0KFg+SZkuXd7eYSrZBOdO46sCBAPVCpLZukW3C48Atasi/5JO0PpO+SAAAAJgBAADHKGssjt/wJweMO/RS4oBajd2X2pbQ5iW59c6c6kgwE95ESlSUz0i64JuRMFeFWpZiQjdiUd7qWrU60DBpTPgv/OHZCeXnVyHM+vlCGjFIvrq+nfH0YKJSo31eVPOGvib/DYEPQnjEXoKfCqXahngTBsV/z8l17VmfkkKYMNpfcZ0+uZKXQM5uPlaLfzQ3lEGOuphyZh28QDvQEbuutQg27xx2bWiscRzAwuo7gNm9V4uddpn+AsxGHyH4DLfL/P9bIlfIe++0MEqF5i9OC5PLYzfm/H910Xxicf78aNG/cjv7rzkMfJRk7t45e/Oss7tXFZfkrjn0V8VGHIi1aUScieDOM2zUZElsPTKspGFPjw90NsjmKXlDIkWa1XJvgdWcWK4gBPDhCX/+3q2iTCIVo9BelTSMJsUU08Ve86yg1ZCCG2JWcBJvN0W6ORqRKcbBZxA9JhbLVB07Gzp4M77FM/HrVQIsDoSXLPiJSIwbW+9+7wAta/XpHnxdyneAU07G8hnG/dnOc20c/Yfu6sA0YLR1RrlRlGFJAAAAgAEAAHOK2OEQbDz0Byz+5RoEWxCnb+OQF1fxD2c+TVewWhuFaKyZFSw7FTlAt3xyCfU9gIa5t6wQ+TYXsgRqI/b0n1939jqGGItQZlqmGCMw15mxewoVeSlzRQm1TYJ1aFU33MgJ2Y9GpibUCcEn0kIqXf83WaaKhlLt68yZvYGkqqKC8mbvtaKAt1RY8+nwfp42GEjLWaOZPoKVpIo6PX4nD0R6eLHDowcBRqVn11xGCMMWkGUcudHoQkfmCxtQZMchdNWHucS+mMxW/64cBFPLYSlL2YwuP4ARWD4ZltXBa05bH1tYA9w7WDCUX8m8qLrzVwBjfqw34MAcazq8csge9t8EWKEbJpTEjJ2gARUhBOdfTi/5IHjT9H+X5UaXYHW0bjJaaRbRc7umr+61w7RTZ+5fQP3OV2jZICI8fCH98bVe2OBsDP1Q3B8TRroFEd+wwxBuQTcME24PhJjVaNSw8x19rnVCarGBXy6VEZFuwKsRF1tjBF4zQKAwVDIsPnMmuEoAAACIAQAAq668bjzBdIPbFndMjXHoI4WOu/D19Is/kFhghxg9xVM/WA30s7ypelPWViVRuVy/NRbWRlsYCi0nAS95zevg9GQbE8Eh5TMO9UKxi8xnEzrhuswUaihOVS3qhP714Lgr/XR2ji+5WThzhX0LSS5dkVCHxxzIYFpCj0KgkoE0WuvWwBCDOciSrCQKkBS5cD5A8EjhizDXAHj13dNSpgFgzweQ5hzNfAOwFRk5Jd7HlA00h/kP/tV/0sWo0e16LBZvBy7TBMViVuGVUWszrNfMA8L43BDjMmjcvGdiXs7UBibS3MPsmyFTH6X32RbtbtSYPpvp7ULhIddEvrhrj6kxa2XQXwngP3xZ2jRGKHlgUSvBjtfQdlPJry3GWWgZWjr+d30qEJI5U4Q17L+CTUyPJISoqeEUrwRqnvOd07AZsLuchVlWYEzW/TDSl5DUR9aSFoEPSqXnYTRPUQnrj8XrWMWsc/iQLsGSAf8Z4v6cSEofp1Gg5e+pBYqUBt8CEb/l3JC7nfrjMJAAAAAA');
