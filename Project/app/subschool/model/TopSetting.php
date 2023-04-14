<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_2fc3f0c6e6f6c595674e8f923f33df2a($e,$m){

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
