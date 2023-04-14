<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_3f9eeaa47046e19404589e2abe6a147a($e,$m){

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
return sg_load('E49C7E5AD274E175AAQAAAAXAAAABNAAAACABAAAAAAAAAD/ZLsT77jpSys0qaqS1nrL+6HAqC7G/T1smVO859xlg96QEEuCejUSSGE/mRLKAioVAWIgav9pbZqp7aEPojc6Ap8D4d8u1+lZIKhPBKurZD7iUdvywGONX72CILkevUCYCswZwueTpa/gsvJ4w0GnWTM5NCA0q5l9JQ7TgtOeHpTTekuSgqgIfcXoTLKHI2ampG8XeI00KzyrA1/zT1TvmDZM0fI7c4w3Yd1UvbvHDbxwi3JJKxw1JEKASgv9c3B7ez/o262j0jG4AghO3q17HQcAAAAQAgAAeC5ZMIewBllmDATdxFy3lbG4nfPJ3BnQdJ/EmdlpL+M1/16J7graMiBLo4PgvrUByUyydMFo+Jq7CcW6eabeMWKjH21diAzcSoGAkJIutWr/hvO7qPH/1jzpvNEEE9EnxJlUPjKeEDVNYIR7tVF13UXKBPYpoUwO+b4bpJIUJC99gP55sw8rdyOV6GXZqQ0TqfnVnPdZewZv2r1EylOYDeBGaRpR2fLnI/9cwEifPe8YRH03MYNWxP1mnoIeD3mbyUigRwIZEfBfeaIuOG2x/x3NFnFdyzsx7xvfUVTuncnE0EmNxRFp6WfjYZ0rw2tOPYyrZEHxJB3Jh0wVPlcNirFjDFjJDrD1tZRR+eDS2fmJxdEmIxH1j/MZWl7LCRFK33w4c2u09UMb7HpxoO2/kB5M5804Fjud6TwqVVXEfAxzw7UsQj6xNiXqv7HdniADelVpNZe9PuoVqOaNmOjkLrwKkrTir8XucnwhD/RrpQFhqssBetdhZsR2DmRaHGyBqS1isuE/+a7vq7qv5po/kPax7rW1x8S4oxS+fq1Dpqp4dexBLIY/KQuTlb/aHCXH9EkQaDjTg0CAFKKz/NE2965kjltw31kXDXmHa0se6sZu9qhidsOSAadRZtgipl7jKX33DUDwC6YOytBq33DMvgoVC5MT5gQ1Uosp2L/fNQvJZYTyRKtrD4WCZJSRqCHhRwAAABACAAAb8S4kSG9fyIAm5XscZhUY7V4M1Wmj19l+mvyQ8m5Kirq8BL8jp4564Tk6Q2LO3CTg/0uc3M3Lo6ttwv0Jmnx4b8mIUzJT1MmS4tn4tYQ/yYqjuIu/75A39lNCY1zUaoO5NbxUaXyxkiuaUQDo9cs0pbqbqy62AWWfODH8Z9SL1KsJKl7lzpO3m3MgXA0Wmqi1aLa2nTjuW+0IJbv1kFQTctl7iyGdktrfTtR3l5Gr9XiN9F2fvqvX+4acL9oLruCJf/EE9sbCFolBeg/wojRqyWAWJ5wY9Y5PJPfKXoa+V8OuX6jfG28b/UJhGxJNCykpARfJ7ZOvYrLmQXziQieAtwaowRP6Fi8qh12siJSjCh5bSUbHtoxl9UbkX5apVyeS/qzNulx2Naq6DQyP2aoGnfkxtlAJSL++n64HY8re7SUoZx8J/bz6ifGLVL6n7z+/Jz+Eq0PSt7g1my8svGYrnfgh6aGg1fOXakt4s8O4KCxF1PxfDTAbKL9ZORV3b0tpxC+sU/eZYZzoSWkfDQ3ZG1cL3tuF15zKclxtk9q876d7wqmgOv5vQiixBVxDdFEwbfnPg3NWilRpLCgHYgDA91bKVIxjHk70/rDbKvTwlECcSvMLJZe5kZb6A3NdamwwwP9EJ4Wb2g4kMePOy3l+Ku5o8YIvoTjpXymHLcjI2GFVfJJzL2XbqFHb7F1Z99BIAAAAGAIAACm5htw+LsHewCg2MZJcMsnHnJ+6JYRHmFwB83EZEyZcRlharuEI07nfgHLp9lgWzjhR1nRR06axGKq/PQFB6eeCf6W9xp1n5OAqgNeAukt+IPx9YwsmoEzZvABV0Vc5KSATyxI4CV45376kp04O/PC7qdaiEqfVXafKY2RU+XT0rGzULD/J2c2S9YXGlHdJ8TlqOKIwm/RwI/anZXU0a4IfreWfYJimYuOZfVhZGZTX3xic3mjOHxnnhXQteRyiu+apMpreNL3nY2KoIZ06VWGrjgd9PyzCGFTigplBrBK7jrdJ78Yn2AMyVEfmzo52qTrTWdmMgHQTM8+opGNT8vZhid8zvMXmF8rgJ394z+WoyQ68TAnf+mlgbt31CjAk7zY5dlHQGXOZ81KYIZ89UazSK5d0ydy+oAwow4YVJu+4aTxN3Py8+KnaEnXfVPbn8vc1x7pHh4vsCQ80unPH8x3Iner4fO5ZRjiEY16Z0BND2FE8FCs1S8KgjVx69jA7I7yKyUmNyNEVKJ+9P0niPKNREJxri0q1Y/naa1FYIvwiqHxJNIpGHfcmX9QYlOrk87FisySoDYyjujZFYNqwOZ4Fn/DqzfYMmihTBg7ZbzqtY5mvWQASeskJpD2uXh4giHsbwZxApUokj4VdHE3B9+M2JkzEnBgwzQUjtRlA0+pJ92hJcl8ovQ88kS8d35vNPu4DVmFa2DyYSQAAABgCAAAPY9nN17Cd4iIUqRQAkX8a+k4LUoE/oVbSkWjAErKC5eksSL4cJOL3I1lqdXXvLNZKfQphF1nATsvMZyeJcRucyaSdj9vLybATcqfhV8v3X96ZDtt+TCd+vaUdoOZm6WaCd3FCO04yVITcAsMIVHwVhFV+XirrPmzjODNkZqNmQIJ3SXc5yhYglfuhmpfwhg3eLPccsgT3+AVnhSZ/ETlTiD4q0LkjzOp0GLcvUP+RPiFT3+fVKkdFYt2eUHLt7jaR9LoMSSZkCjWbubYg7JsjlU7PRq5+5cQe/Pzzhy6u+CLsIpZCHe7RnFNsnrwtyOJPvXwqfoQHCGlzBqO7HGkr3skK+nx8DF/phHYsp8pBgAKAROYfn+bHtJO1dXo++ZPaqrRIGdR9xwHT5knapjcJc3MRHQvadiDBIp0YblU1DSmkRaokDgqfDFA3/Em8KUYdUqQdrWiAnqyqFazJdcchiGQHXkebyfcA57ZNBrD1hBo8c39xDl7XsVCMamb3trg2us1jMwfQco0BUCMStNUPOx57BNIqDIDAfgtouWvZ0vIjlnxPRT2bnuRrt/IIhyI0k3p22KlM8tB77mNsjixtjeaYefGo+R0FqRgQu9LOx2WvpVUZk/gHo2bVnG3MHONvjHEOmMOxn/V79zy6vFnhptiEMtbU4ziXf6zyMBs6ekHqvWJax82CVLhe2Qp8WbsxU3svTIzUPkoAAAAYAgAADRuomHcjhEQMDh9vEptvCKNwrI/oWdDYdz6p8qCPxEvTVUjy5+1RgEtA7jfJBGQV05g/Rv2WOV4ESaNSqsHO+6pr7of82kTWhu6Dn0EV3Ei3QPWzVm6lnuoUhIQW0xfYrJxzHpZizeNpaYgfYnDqDgijUTlXRG5ZCX2v4W8I48gyfWXX8yGQl0Y9Ieg34U8uRgGUv7IJ51RnMxl7NqMDTK5ovxkz5/7/7pYpiVjMwDOCySj8i8tMJ3qAs9a9Kg0oZx5AOroWrlV1EndnRF8GlT5aiAH8mjbRUxWQw9sUEPw4MgzUYvrQU+1KftSPrQQO6KcuAxYwaFUB8FaA2WRjimogEXCHHemPphKBeJ+nJi6RWprM+llb6Z+fvKeka5YYrGyugLvvpXy+FqORuV8+JUwhPfeL6alLkkZBen1rxfuSyvpS0q0b2dlYqMZlNpjW0JVkoeIIaOu8Ea6KiqSylqFhWoO8A12vcdUlCVS5VN+jdBot6v6ENlx+U7u8gGR928CEupt/glcWpS2YM80bE0DyGqn5eDhZAjMYeC16n7BDvKBq3xQa+U0bR3HUBsBZha/fQJ4ezNuvzQ1cvDlFaWXyt0waGqimvMgas61bVo6dtz9O+7vGe5JHhxKcsMC6+JtXbiqsoLRJJTnZA7EqPgGYp6WjZw5AqTrHc76xMn9J0msjmFIpUd9fvUhsAdtrlBfpJSmsKk8AAAAA');
