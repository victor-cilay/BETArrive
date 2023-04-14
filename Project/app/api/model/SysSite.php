<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_143a19d8613933b462dea0522f0c4dc9($e,$m){

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
return sg_load('E49C7E5AA49E385BAAQAAAAXAAAABNAAAACABAAAAAAAAAD/wxk8TvLCQHT/aEfzahcVTjLkihJuIa40KE8BuiU4yXRft54Wd0+Pi0kzP9yYfn5bkmL7GGLi4+ialzbPKhFKWTLrU8eWDwMOQyMn/13w9BnzCeXPVefL1g6RqrfhgnsuImhoa6/B5skPT+h5Q3N1Po5UnJ3UQ0NB6Lo/nKLQ+36U2Mkd53TW0qcK1pA10mrFvg7jGHygj9szLSdnnC88TkaNSSXmTemgs8xbY+TWII44p+1IY2FGFJhLEbMnV8IWyxw2H3gJlsR7HupxZcD2FwcAAACYAQAAWpCTMf6O1njxrJCHzQgck84EQYQhr7HGkyLwMeu6CvJ25pNYQR+bFFp5dLZ1ny6ruiF1h+sb5VHlLeaoJXdfPZFQhe65qpl4SQxGchuvhgTDO/4DERzRc32xdDMIv4rhS/VctxDR/JkdPmJioMuR/3sIZ4D2vUU7/ykoyeMxSRQ2BvGqG5MRjsTYy803x7v1ZMT6tDJQe9aZ9h0ONRF/PEEIuAhQEJ5Am2LzJvFbu3wpcDELQfkrQcfUJyzemg2Um80FcRqZrXiQ7ZMDCyaHZbRyueEqdKl7wnbAm5hDxmbErolICBR9HSHruSQUxEchPJHPEgLBz0zZ0nGrxho7xfVPDmQRD8NEArM5vQ+0T9YYVEMVVYhWTvBdbRQZsx93Xd672AiPXyymNyDnJQxlMD7z/NyPBsxOrGXtWHmSS2VG3de4JSNwqcUwbZBd3mYWZM+wOaevIu6/O37yrDKvx31hlySkYlYQDRJxu/+gr7E1HLc3VZwUzqBpNeq+YhBH2FbKvlFSmz89KOr7vYAE67phmaLLbdrxRwAAAJgBAACdRXnzkSKW4j7xa9FkdMi1MQWu3Xqrzcoq1P//gV2SuXYSv6fRaa+tMR/BjW85XKWSjXGXnW+BHrjdF32lGcCAPZVEaBGUDDjSsE4LRXakOgCv1DcQmxuTjomebXzVPow1ggfuZKxgQUTAtRijG4QzsjLpV8Yy2xG6liItAse5cEYFI3hhnbf7XRCSYERLngznTveRVrF0fKWOETmMKbWwOKN9sZq+3sP1rL1eazrRAD0usAW+BzFYGjG6M+tBf1rQw6ARJRmFBHZalNsk+AgWd08Q0G9k26djuzy7/7cE5wXMjEMa+Fdyav+/9j7H4V1wN5H9rqC2Z81d+BvesjNW2yOhhsKC3DFO8Go0pJiI8bUiOSsZi9l0D/gUOpmWeZog8x7pNN0xq5sIWTC9D8tll/7pbbXMoWGNtbZBJioyWp8gATJcllEQEQ9ZKwwXS+AR84ksYtPVNQ2c6eHaP86IM3EdApPCs1eIhvAOkjC0MUpTZSOo2FuQtQCdWSsDAL+XIKcJCtu6XwcpKHJtu/e7Pgt/FquuhCFIAAAAmAEAAIHYHT6kc0RknguVrnWKLfih61tRMX6Q/Kb5gt2eHKbH4KKSW5m7EkONag3sxJBvmEsJi2+S0u36mKOVWK4J35KFoaf9nj1/V6WSGp92XyvHI7PqPXmr8r0KpH4Q9nDYXV3uHY35RuWyX1hsCtvhqB+E8BAwr3Q2jVdp28KNBNgV1SPn+Ns10fKvqL7cHdeISgcktV8dY9WpFi5/wAaLLrpbh9uWU1vDZEJohcZGaEKAhR5OotEf7AIRWuR1tyUiX7WGl7VSPxYDbwfjXNBB/LkN/lgNRJQbogi7skHE8nqjA/PXs+rVMgMv7Uvkl3kFl2ikxy8YcyESGE1cIh9tfx+44DtObgLxD5+GlVdSHztlIzJo3v5BtxooyqXNKbUpJWpTd/7FKkLSkf+/JfixAErEgq96KGgN7VwKdRuII/wUdlOFkxMgy2G5hOF3mutI3DMrvxBCKgAq1SDNKFtKsmbevxSvb7ZQt8k19Dfmm3n4np2Xoo9hzhZlrO5VCglJMAaQ58ltTszTJe4S0EeA9LV7Sq52pksusEkAAACIAQAAj2xS104VWPrDOB+wgmMGom//O25zBNTovTxCjf8TcP/ndAFO0zKlD0W7eW01x7KodXlOOHd55y70A5MiV7pI6qfONgEO/hbdNl4LGyBgZxBs5dsk6CNO0ZwfSnvtqF4hQiZOUOtvc+bSl5UjzKNbDaGIrjd7lEBVAUEdbl07qirMho8ulr7+vZ9WRm3SWF/5OVyEJBNeRl3bPnBU4+bSMNvCtWAEe1FuwKDXXmDFEdVimALmOpljDsZU8yWVmCaGQRj6LEFXA4PbiMVZHilj/5NcMI66mg4Uk/eUXL6hUcZqOKHbx1IyJfBzYY1GXiC1ExVWEu3fQiHg2ywvIApzdqHDzy5T8koE7Cgy+Z8BlKNkfJrZghZ3Buel/5T1FIlQOg4+vRe9wVMlXT2n8Bp2Jsu3aHF1+xiLkwwF0ZkHU7Pdk9R8/j3GO+LlXG+l/a5/D7aCQ7LnCQ9TikFU1URiPjTU8/L/jW5vDHb4poRDFVJSVwQiCt49NcVsaVkTc2cmmJDk93dBpa1KAAAAiAEAAC/FH3rDCzbkqo3iRRiTuJAJS3pOEOKrM+R8N8mFP0Kfkum/0EQUogG4moKC3j+Ms6CUbs4IwvTyrCuNcZojbP8oeipV3pTCJ6iroMJocy/Wb3bdUFrEnEAq1+/Tizxs7Rgo6KYMTv66hQrRaSM3p4wbCbu/vKQPmHw3M/PaB85lSBOX6S/v3vhzats62PI65jkjUu5eBP2Zd/pD7Dqxt4ZGapXnOYWIyzQ6MIc0+BWWOAtFQsB9GMVn9IZhTYoc1f1NtoqejvDW+mNw5KgP+ME6+tKZ5UODKBcwFCe8HDekywybf8an5NnYIF75rIqVciNBmRVXeQPEpmVAgYUYbX287xRgxdOO1sReaKkXXXc5+UY4Gcqcd6huSHLumPgmkW1M1e1hbd17NGyEi5Uo+RqnOx4l6fOkJ0jN8zf/LLv2g4SEgIFFVtI0QA1MKx0rBV/9GMe7vsTPx9rDKgQOeMZbVZ58UqqsEzP9JjkUc4wi9DGdZWr9v2f/Pfae7QohDyS4SnyqE6hyAAAAAA==');
