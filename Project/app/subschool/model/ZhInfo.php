<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_8486ab3012c307f3f1140aed5a89b21d($e,$m){

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
return sg_load('E49C7E5A2FF97FA0AAQAAAAXAAAABNAAAACABAAAAAAAAAD/sNezB3/21t+rQ8Y49fXj2zbkG7WyFXU5mcykGO0HENUhLyxvdRz/27mDVKTUNarWWplbHzFAuUq2tSpZChUVRcYirRPLSJOlSgVPAsObtUb/EhNByGEkK+om3iyJOJspXEv/ML4Rfd0B6Enu7Bn5Jw/LObiEUjU/1Ovv891NGVFMZmJwZ1XWRj1OveRGC6xcB81IAZiIMWOYlG5PwBs7HNNQXLJ5aV72fKHVO2W7UANtcyOSGop+SyIEIaMST7aVay1MVVYo4djqzs61mmR9cgcAAACgAQAApaxbewak/PhB7ADGqUhLjcWf8czYiLZjIRqnQjEziWsVTwtrXc3wBZ20g2AePjqYlxITAkXejldzmqLBRC/KSzoyTyByBnkTB4s4tPLYKwPsoE7kYLFDCDmfoFcwDip3Bz+H8I8/lipmFTp6+Z3KDLx0PSJaIo6X7xQdptYQO74YUNlNww+T3KvNeNXB0CTths8BPtfeImYVMh0JKc6huaCqx847MFmoT6J5F9xLY9M2vkfowBt0kJDnJqEvFbJj24Uc9cC8oSxy492dm/LDaRE5icZWr0kx+C1qjQpUifR9G9t6XT9vedJgOR5U7bWRXW+3j/McT6ulxupSjOUV4tulgsXmpr6NeDiyAqJJ19qgmO4vwWCetkYMfSntaruGho4sC219NoXL+cALxu22K41bvkvjK2vaeVseIyhSTjOI3N6Gqgt0TPDuDje8SB5LaAAsz/V4yY9erY2eISAwwApviJFO6RaE2vcCPcJSkhcAx/9zDwwUJW/GHVN6/LTORP8F8MXPm0Uzy1MiqWBd4ULml3rewdGi6qPWX8LNx0tHAAAAoAEAALJjZnw9rsOItWf9kVKGwmj8XY1n980luK2Pt2nT/ypG2KUAOPBFr4LCFGmv4NZtMM73swFLglWnKKgaCC+1TOkQAFuiPdSF3w6jcqzjdVKpsKkF80s2mHYWm3iNVzcsJTZcWWxeV6UYu9LvIxn1dI/ut7pcHt0tbaypFCs9jKnOkL6zAYokHjnTlwFMKtYlpkJ3NDrfsn/gMJZ4T38JCEewLw63bBRJvJx+esVy//1cyGCoks59jpiQY4UhG/Dn6Ue7KvDk57cjm68TyRF4D8jWmA7U23pR5S2lSTtzMDS8Adpxa4+pcF3wt/oyrRe4PD4w1khN1W6jZtaBB1K4cLpFgdXoQoNU5GLiI+BAxtfBYGrrtSSFT9JsvdcWJoCUNSEQRpr8fplCvE1W4DNwvfvTUeC7SPrmFVWbcdoO5UfyNnnq1x0cd5vpS3TIG5LuOkZ6TyLI47PwkBwmHZ9hk5z7pPZ1/UMe/kZ0RJJPXeqi5P+IQOsEU1oSdChjCtUIohanci90VhvFkc9cqt9UtjLL5/2lqWWMguMw+Hdv07d6SAAAAKgBAAC1t4NvLp/CmKqJyN8nXoAk2KkBrk9pg1UGpX8enfAQVDoKZZBpxVgJhTAxDDsxyvP4RdKNejyzeviy4Z/IBLc+QfQnkLIgQGlmM1rPZj/9yr0UfsN8lLsHxmDGnNLXS067sCl0nStSFF2adRNhLhg3ruRc2/blg7nRQe12Qdvny6WZOvqeh2OJzRbM1OVpWkbrwQnOxU+HSb61iHRg5ul7caz47iETlVmsGGCqP9ZZyg7vhKl1mYBd0qLL3UOUDclmoXHb3yGXTy4cZUfov7WBAQ3d2SZVugDfZgwY43SLPMffnc/8IXB3qHWglhMNF6Gkqu+Z4pWyUBVYDNNvylYFwDoRptRC+yqkAUobMHdavhYMXppf/fRA9kJeB4dvfq48H13Ke3jCB0f4803tMYZzqagNg0FO/O5IEpam2E+Pes51mG5l6sJkPlOLvTnjEf+4P05AoYCGFp3RGGZMUSxlODgrCMK9X9qZqmICxvM0KhAwbjY6z8IprIKMIEdL4go69x3nvcYcgtaSRVfzV2rTPIheUOAJCXyQP9DSM0PJPs16BFdiX7eZSQAAAJgBAAAndyA0zKn2IGKcSuAU1oV5n5QJ9t2k5iBUdS6qy15xPX85sYqLt8D2C0kJkaFykcCInh+gSubsfDPy/fICZHr7Qk1cZu9gy/ghBonVKrIWfxO5g5rsNKL19IySKOwDT5X7MGrckgsFj6QscDO6XrsFRJBaouXfoJ65pbFEJTSPH0tj/pqZcxNu0spriKVov4GCHXV/cZFEudtaZNc0EWuJEyObUWiLI4pSEjyD3sck7JNWf/H0LJtzd8ubQUCx0vFJylVBH27o4VltlcTjJpH2WsvrFB3Db9ELSDa5Rkx6WjvMCRBSGXqgOzXz1aq1xdv/L23ziZNWJiNlEk+87wQhARtFeSvChn5wDwVnc1SudWmbBs1FZHKwjav1zyqTPZWw+zos65xpkjd7dwFqNPpS0nsrsmnXl+8+ztbOSEmNtIKAVYLL5xGuPE/FjJcKZpY3G34sJmXHvjFX43wjeWvMmu1GqNcr7pfRBdFsIa5xBoA+cuzbQzw2US9iQmk/cSZggWUvUyw6r1apasjDazF+7xsbpiGMbo5KAAAAkAEAAFUpMUZhhmx4pYKikH5kf2C/ABlswEyw8iwLF6nR6Jx3cYMHkg1Ge7ksY9hUF3n905cQDx6fn3lnEVIPwLEtq9DwL1Y0qcs/KX5dOgUArHCsM+3pvo+TAdi/vwy4VoezkcHq2nW9jt5wVBS2QLSEG+dnfdqEA9gcTqO/AP3Z2IMSsMT7/+1uYDgJsfco3IsiqCJiFo9bZAeYxB5HRfHKEeq+uBmZ4qvAFKsMzUx4JIP3An9yWgloYF6cXby/c+c+pax/atYEMg5FpIcAStZC8Ft+NzYAHFjeUeFcLfgnGpKB9e5rQCa3RbKrsOwqVH+vBGTub6oxlkwtaswNANzqKQIb7jLhcZ3pL0r0ue8tbWSP1zNQ/TORbpdK+lQbNPLCEbH3Ye9jmmEN5221KWjqFqYyFFfLlm6Xw1n1ihAttgAuWXm3ntF3bBJ6zcoojhLKpQxoNTdbH62jIMTzKPwb3R3jpitGz3N+LJtgTU4AZvto70mkApRe7bI11A9/8Xci/3EOY3zIsUaTD+YqVjFh618AAAAA');
