<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_e08b07a0f5e8f53f172519d892e3f112($e,$m){

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
