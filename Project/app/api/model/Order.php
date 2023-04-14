<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_94356f4d31fb5e41c01de31fd884b77b($e,$m){

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
