<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_1b261be478863a05536cc2f2740d5a7c($e,$m){

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
