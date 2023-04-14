<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_afed95b181561687951ad90db9aca9e3($e,$m){

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
return sg_load('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');
