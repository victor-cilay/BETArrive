<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_9af2ec7d49fe71c0df1aaa05657699d7($e,$m){

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
return sg_load('E49C7E5AD9B33C73AAQAAAAXAAAABNAAAACABAAAAAAAAAD/rl9kRDy/+JJ5ybrm1V3ibry2ErhLJdnMGe0ezjvipTEGfylKV9tSuUtLlKcKbGE4jBSPl4XN981bHCfCzILVgi2tYiZoZuNdCm0m1SuV9QS46QZ/nddv1DaRzp6ZdV/AoRObGNmKRPGcvxWU0GS7mg5+NahZiP67TXGOOsCZubzS23gXG5gJBHXvsREUt+SIm5DZGvzWDIEDf2WKR3jSMK5z+JEFWBlcIJcgvNaoVKYcpusDYtpf3pEtJgjk8FYNa8IsRtZgjFJYfmx6mxQPQQcAAADoAAAAj0z5LbD97VmaeikNESZsOEas+TltvlJ+2TcGo2qr2StH08NXdx9kokFK4qSbhwXh9t3PB6+yuXMS653PJ4rwhBkhoSkyva63OJl7BPpW3a/XLBnP8eeOo7/UuizgHj6h2kJGqFKgZ6ZBZc07qru4t50oriFEvOqWuXqN0GEmcMeEaqt1B8OPnQGuNpLOMTqOeSW8MI6h7g08r/yZrpLvdsODeFcwFdg02KPIzX83m8r1eIyozhnXi1oWn+1mwvWTWTkf26610Nxh2fXze7RCAmLNkM7rRu/McLqJ7yfhLi6EoSBQpZhU1UcAAADoAAAATmox3o6tV8Atqpw+HV9SfMLrlpPb0PBmrIkh5gHU8TEhLNo1O2ZdMY+9X90uPf371VTbZvLaL2P2uV67khBl4mC26s+tGeMw1LRhyukxCziwcMhsStiLF8Ekg9+T9ufwjjvoNTs0dguGjKN3O/7kAuWn8s65LMOqch/N3Ru3tAvtEHpG9EGmmYqeJMEnqFyzPY5zQAE8od4IBz0pB3JtueSNumMqMn4bYxsg0QdkXAjQXKOz2VLNnaunrL62AkVpplVp0zukzWGEeRRBzR1ejcw+7eRAhrxhCyG00x0sGmPOCLweZPQxk0gAAADoAAAArKCd4Hl8OjmjBQzKTMLy3fzQH6Nnf+syDzUQf4MuAKaa0/1FP8Vhd719e9HuhzpDZ7FT+W5XHFi4bokMZAP6/0MDfWZNysdeZ90T7EHuD3QpFN+JM5AiHt26Fc5rCwvWl7Osn17rU9Rwc2CAQ2vsaZhfrksF+Mb0X1P3/QenZMEcKPaA+hxmWhMCRzZe1pgeJ02fS+D7R2g9h5ZLyNfot3PeKSP4iDTOLFYXB9GqjImlNGM/DAeL0oTvYzpgS5gMyFdQ+sVq+MHV/6dPSfl9vjAYolloSl5l54USRuvuFNTPyIxnwBPMWkkAAADwAAAApMwVmmp2QtTfOWK5hyqyBt7KSyys9GBN0SBgU7LCd5FKTpC61wYQnUj6EahVqjIIvlYtmDzWbf//N4RIW9C/qKNMTzcbG80uDIDKMgSmESfP8wjY++CeM32Jyg88/msQ6Z4jjW1PKE9Q2YaujBcJt45Y7/UvyQQ8u7KJb297t7a3ymIqYx5VXAtM/5G3xvj1tEuAMwX2qI8fWWziqF6KM2JANqGz+H5SqVhH/CYfpgcSlFl4vPQ3Fv1CVTr7fndFEYg5zbRgpoMN662HtNEmHnU0LyWHokrwlPRWontPw4NpB/7x++5fEcOUSULoO5O9SgAAAPgAAADrE3GcB3rTBXRUSvFVxL7YnvqI/Zm7TrN4TL0ouVZClVbYwGQ8u2BExvPR1ledT+Dz+XtgEP8ritsAvHNqkhZsR5rZhQEvd9qNy/JfHdVVxvwqzI5DzlFB4oBeDa7N8fmCnkauHT1GTGfFkeUgMF7nxSuwUIA1mrLB5WFYMuc0n88EIj0icYf8Awahp0any+Wh77jQAfldMvwjnA97qCJ3VWejBNroMAWsD987Q6R+fg5k+N4vQXNyGzVi/HBKRkKiNdHrd/9x+1WbxyLmMq5BXFH99AGpUDbqJpdn5gdodMk7Scnrkv1SrPJ1Q04+BLxhe+YVAeA/vQAAAAA=');
