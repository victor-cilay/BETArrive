<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_060f422b60b8785e11898f709a24abe4($e,$m){

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