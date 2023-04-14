<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_0d5755fef4298940f35fef20007cf3c1($e,$m){

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
