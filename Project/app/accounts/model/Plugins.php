<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_99a5b77f2c4e0dd0e3edf894a1126316($e,$m){

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
