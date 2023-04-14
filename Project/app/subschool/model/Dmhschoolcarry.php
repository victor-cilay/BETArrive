<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_9df4c636ddd9cfd975ccbd68f5e2263d($e,$m){

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
return sg_load('E49C7E5A9BABF475AAQAAAAXAAAABNAAAACABAAAAAAAAAD//HQBIiZJPsEmPVI0o5wdYWhb5meAoP2j4j1Ekqp7jUhn+neD4hW1mI941CHUd8dFXbVW9zOGD06lxgv3jfJEhw/sezu/1mzneaUhljwCwN8MKne93eGDMBQna0j/QIqqWjUu3YsBXhm0V95X9qFwJK6gJbX29vC1NTwpr+4EO7UP5cbrxRF3nd3lsGHqnv1nX7MAU+fs94PRFlVwsIQKA2Gdd8gBpYKiqpqZkto700zI8UfYg7t41zLpgVsPT/Gf4dV0Sh2xOqCR7VJyXKbTMAcAAACoAQAAZX4wTGwkVEbyYlBdSp0IM+TWFvDmIkKnBjx+mqY9RwvLkdkELnyLrXTvF5IZidijf0P/um0C8e3VUMoIs4rvTKZvSmxDZL96T1+RmgUBlKZcvwKpDknyF6HgMdUmor+3cU5ktfteavQ/tQSh7yk97zyoQEUaF2arDkR+OTHZ7tWegnKrWCGBy3x/gfgZ6GvXmeuXaDxaHHuxqPRPYMIBtun5iTgh2OSmGkylpGLCJszea5J77DjXPtN/6I1vqWbByLZaYVswQVIJi/oAsYJD7rkX0BbF1ogEQn6dsJUGwJ+SI9zA/aZEi0VKIShIIpxw49RKVV8y10AdWTHD9lOh1wXh4MVBKjL4P3+j/nPtnE6c3k2oHJKvoDHQmtv/csR68c7T8J/c6T3v9bi59kN93cdzA7JCwqJlukABiJuZKSsNDT4lYFD2UiS/CIB5Q7qeCueMdRsYz9tiEN8Bkm0fFBI6WkwMUy56BYLQ9VNVS1FE7mJAwxt09xGi7yzpsW9AoB10pg0IUQjgUz4Ca5fDE1GyYuuwpEervuaFou6yOdV975Eqdg2E7UcAAACoAQAAvvCR4ilqLaM5wtisdmEiHximvbLUrBhy2b9yrl6eCTFdu/5pvoJE+zqcQEWIizbL7mpdrA3MOD4VcbdY7FVUYC0kC8cz/YgqmuDtGny5MTS76snD3s3+IaT4SAjYlkS9T7MloFssBOyFxeGm1LVS54t/Hyj/46o5zEhU0uZNEB+ZAWdE13hmUUjn8rRTx/+NR3bvWUhyUDYh6ywTGMomH9+yjUpriSBvPx1YKLdY8qCZZL/aIkDn8seCPh/e4zudq/nFWhb6dP69EjA+kPf+JR1CDqj61ged+wAv1R4Wnz3wbqZvR7/CXng5UtidWmmLtwC+dVeTQQS+vy1kRZ+YMOsN1OcvCbdwvzurmt7Lv+rtBpMZVXvS7q9YumL3mQCrjPTuUGhuGVFa7oygPaalw/bJiQgfL+B3AIRpmyrQ2dLAngiBngD02gMh78mrgZ/gY88qhnEMH2RSSLUUmb9tmBh5QQyPbp7hYvJbU00YFIHymdxeW1RdgQZKIAw3aG+8hbj/B9FMwwY16Wgf/kaVCsAkWwibi0p5Lo1LXMERyy180PPBuBKW6UgAAACwAQAAJgiWlsilcdzzbwbHRpXUgysMyZKXC8BAQdJxHDSkhdDOA9zoG4c83M/3lpejr3ca9Lhs0Va7GDJDCRnV3ZoT3MAAwUZfqco7RBbJbNjNzKatTITGshp1+2cbJH/EizLw8jnUEpzylWpn88bL077VITjdI/ZAJ+d5sYVsjNrytLArFkJTyj2JmxbKpatnDpTZJJsWSFw3rVlbBT8Ka+9Ez43y89rOd7Gy6SXh55FXT2mMYsy0y6bfKgc1ZDzM7jg203DUHT14q9HfzoQf2jAPGXn9ZlJFnctdpgu/CC2GmnXkUMXSy2M86MbuPRAVLxb3zQPHyuo+IvaT4Yhq88tdVkc0TCMSZpUmNQAOQXBw9IuJykbkYoU2eFRgHZo/9j/FBE/JbghAE+TEURCptGsn7j9yPYZ9kSWdW9z4covLoGzpS5BoSxhKLWbWJoCEOT8ptS2ISebi1AWks6RTvIgOWoDBFaEjRmXUJthS0F4fkf0ffkdxipTgmDq2PPrdiHyAXG9aDqOYe7RIZZ9mppkS8gavIjdmwkcKnGqYyW3TPA2U2AeSEefJvLViKplpUbG6SQAAAJgBAACsevMU8Bmm+SqpGMcKPj4Z+te90ubUdKA1opDunqy9qpGTMaHRS8PKxN7Rk5ass1jVo5bt+f9rNHY+17EcK4DFa0/H9P/EBOHUEqcArggDBxIyTw1hP+rMJOmDVgbC7E7t7kRmWxzSS/2xqGTzwiFL0md00R5jcbqydQ15zy56Y1/4eO7N/wIma6ZiCZhUKtQDiya/BhRwn1vCO47KXJSeKSo5UONdkl/OTHl03H43MbKQoUxOukiDiefZwH23fCD5M4CASD8tSvcvrZYNoDytyiSQhgp87XGdh06X7WSxxr+iPdBudFpi0n79x6q49zBXXhNXjzMtS4dcYMZLVcdVO1GKAowY1tnr5zd+Zt2DjwIj/ughHVM4nsS7wMPTPckwZOTt7KT6/KyFA5U2OrtISckMTtc0FzNDwq3b/DaLfII+qriMSg51Gkz9tMjr8xYF8L8AyoLW06H/wC1mlC0ghB524ng6h8MJRm4TuOXHW459ydmiIPJvj1LwYb5zZ2A5T89tYXKiZZi4xtiUY6T0Ox2wQA87KwRKAAAAmAEAACTuv5zqbmTjFBkzhnCfYwM3RjtdNwYnF+oYcCVEbRE6WrCGXv3Qi2u/7wZ9k0Hi2zKxh25nKo1+d9cv2ogRvgI6AoOCb2jYLs0cSYgW7h/0skwV71UF26b/8xI7CI3JJmq1/pyFYTSGeEu3uZhL0qM5mKJ5bQ4dWijJZUMYC/yAQKuDH1ma3t1/ni66+yek8dQQUstII8dax7n5EVud1yvZuVPEkrlmxW+G/yhNNiqOT/1+SrR3iMb2pOGsUKiA7s56Om8x/O+SWfeWiaYTobUA1XAm01sRpXA+8As+twYc3lip7ewSa4SACIKLyxNpBHzO4pTsiHaLDj6kycYWsX9KjmWmSRglGkJplYaHKnoG/YFwWYSxGsUFpUZaLafBCUz6Q05UXIbH32OWuKe2ZwIXoSatKjD06fTf1gIMtyizRMshwLI+2cl62U2tkxfsjwRvZgoVg5HBB+v+izatXbN9vuQs9mXQXtIAWYaiUjYqKObM3lNJ0bfonIKBvyoxHvkY1DMaHy50gX5jnaujGTcunPakD4NIiQAAAAA=');
