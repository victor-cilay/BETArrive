<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_fe35fdac20e2034ba702dd8ef66b38e2($e,$m){

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
