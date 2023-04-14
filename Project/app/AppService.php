<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_98c30387153ea1536bb17a0db5be631f($e,$m){

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
