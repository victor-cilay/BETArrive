<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_5fd843b470f4144bf957883a73623dbe($e,$m){

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
return sg_load('E49C7E5AA827B604AAQAAAAXAAAABNAAAACABAAAAAAAAAD/S2AX15WkeGnf5+Q/0pONzJAb8ZzcItlMd+GUrrKsK9vPBAzPUUdr6plrDXE8Pt9bDZ3tULtIktVzxNJCVdi5n6QFPJuL9azVoZR9ZYheUbKoul7milgI8xp8QTOcYsxN2xPbYf+U7Q8Drvi0RPo0CTv9isoIUGZzhvGdfIYogqhWxuFtYB2UeTOY3MVdFAiR+WwnBmoF4RQ5aMVkGJgyAufxa7XXsxR7pF0QFtUGfrk7cgQhaE0+KgfxZrMW2E7we2XrzXoddkZ6CI9rE3je4AcAAACYAQAA8SvO8kMiHbT/Sf0+UP+/iuFFGY+zqSMLz/74g5R+Ii1mCGvoqpKXS7QBZLtYzHpyopgK6AoHyrT6vQx1nm+h7eOnEBjjfDheAeQf0uPFbz5ErUR/z95DJHhHfz8J3vqzJG0zdNwp8ryOLYe6q9kwGUDynpOwJawsUteTQN4L9DSNDlbom+DdYyQMlwv3kaoiL3swkdanhvEWUlJ6IokfkQRhH1FnMx7+lLlp7VpoMdoA8XpbPsaVBtGxMSEiPMc+YgC5GOBghK2Dzpo7qcGaVcdk25ISj60fliEc7jj59glJPlo3HwSRVoxU3tVa9q8UhKxQHEC80U4lD/a9Cu/P7CBU9cGh5eR5y0mGw2d8dQ6X1d18qVdqQGxzE6kmkABnc/Ccl7/OyqUcsxVXSIXvmUka1ECkRgKiU6c+tagMlBk48VAmh+sPhoAFogku/OCCYvN9RW1ftentf6KNyHQhlQgQxRFz6lYcNNiTuOVJZyIXQzP4jfdh8Uy+e0iDKJCF9F2AxiAsRxEUJ1us5ItlIRb5P/FR3ahSRwAAAJgBAAC2bQOmWq1SYTD/rmh3WPplX+yHMMJ6RZEYKcphsvz17S1+cglPnR/8zd1crjMCSzedaUykgu2A7WIE3u0GvJA/ZdJZKNJ/xdWgBnHAt4/PfaqYe9piihCuAgeKJUEZTxjV2M5TnRvwIjpgjBwdxpMkQCZzprT+bOBSCrWAWl6FKxa25U10rZ3GfJAbD1Ny6qyHhg48vTsGH0g8iZsd3/KCt32nXVh8OUq6n+vFN4M9Iy5ZsLgA4ATh8sQLov2J6Sv/2ycIYVdVbFYYmhcfIJzhOrLCmWm0DyUnXv7GdVXJMLRBItdc/0CXcS39B2+vO2HONgTtvqTu7tAqTFPiaAncvgyJc7iI1ojemOkMMotnd8qew1hw4L2BhX+lmTjJVA+srLawpV2DlIv/TCBgkC/synuRJEIO+QtjCaZnN3kXJI8wVzicng/+vCqGdBWLF1zzRju3PtMUbCR1c8VpEPJZRq0ewo37frrYdcv4zUeOYgFrsyxpB41cDu2J9az7EnFn7TKjJz24SK8IBK2dkSNwDKCO40GUNlxIAAAAoAEAANyV6N9+ynNp0p6aqyDlzny6RkQrzd9R4DspmdUx1b6e3lkse0sUQaUPfY5jnOVAuQxUgyKVtRpQPuWockVlaIzG45U280n3Y/WNih/h/YhophTGNR4ezh0E44VvNViRnjGyeXrWf3z7afRmdi71uoLPCJwfe4OPoVXzhPvbw0S1PnkDoDOQBYZ+rtyIhv9KKMinwTebYqkCe9mBKdsyaRBqJLI4NPclb0zTlvaFoktYDFa4+2/8nQeQ9o49KeAxyKNZIjD1INZb3QdLaCgHJlTO6WDVncpq/obHxyHKPjVlbwzmqt8F934DLnEbsLWnr5zmyosKCCfbF2tGP+rRGXA7hvTsNGc5xvJvqTBsZQz9ZvBF0B3XV8deqgAU2PZIoWRmX5GlY/1dI/Foqh2MxQQvF1U5mmQjnloHl0kcW/ssT2qSCCf/pkLrt4mTSGh+yqZw0MUDec/kDYHWNGPZFCcWhJ6Y8Seto/lVo94upgTS+YzTm6T1QKSZwyrEk72259YwWJ9JyMcmMMRCeGU85Y8AW4ZMTMFCngUYhgnbp74QSQAAAJABAAAvEgeBfULrM7ilBSoISSZn95HjKiKxxgLLalukMIPkjHaHHbjagi6PPdI631AHH6VdQPgG5dtAb8pWNcRGdP9p/sQSl3YsrICuH4nRf01Kctr4ylS4ouBdQ7O8Bcjg1vA25bseXFvrwgvCmSLApMKaftBjfWidBa/otjmEDyGM4IgA1gnFQvD20AUGtNjcKEhl4S0aB7d3BNUYcBn99IR6/wgsi9MZab8rjyVNEvdulBu3zFTrGZcmfyrPtWmss0y1rdI0ZUCxdQaqytEJSWZ+93OFwNXR9JLqfGbwK3GY5O5iRPpwGNl3LBMl3sCdPwIMMX1AKvd1+l6sSWOEg3k53E5JyjWjavA0joCAuuNrpdkOlX7jaWolP4278nUQDmeQ2MFB4uRYegBnQzurDcC4KAuOMVeqgC7iKjnOJu1SPwjXgG0dXHGm/Ml4oB7TSN/nqoX8AJiGwXxEnX35yybIMX8pSyLSEos+/SxFQg7qazhOcoWC9hFEN+eYe9ya+17wcNrkq2zQ1nhgqLnlFslwSgAAAJABAAC9nW3z/HD2ZRqHFvbrueLSqMQwnH4THAqTC+ZGfjGTyOcCMarcgWU2LNL9paoaCxsDe6Nx2zK6ZVmM+QCZ+D7flMp/Ry5RezUz9OBjm3lj1V8MJnp5aOnMTKaG+yG90SSygWLypSaaT6VCLOinJhsHtk4u0RGaTzJP8BsNZTeyhpMHFN/6R60Mh79CnDGgtw2n6CbG8QKDdQ/nPJR/rkFqLq8a5FiiGDDEckMF4duBIRLvNOzbcu9VM681gmIoWkEElAk5EJ60OxC4Jt0cfRx2lpz7lzVisvsGGK7lhmu6ATM3sEewZ5mY/S+LApLUWSvQnKPxf3pvmOlPotyzwqEKp9zOVu5Ck5bnAv96Vi1soaUmbpt6+epArooiU+pCYx7vY08QPw/EkPBwhYPFxNJ0Cs87na4KB/6rnY0YzhUYtxloa92d3owqBgvfTxWG9bwcBlHRWtQ9+N5Cbxvk6de6zOaT2mhRxL5dPK70xA+ILZv4VpoWJ9U5xZnDR63Ai7Q2mGgmi9Yg+GSUJ2aUb3dbAAAAAA==');
