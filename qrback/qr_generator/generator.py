import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.colormasks import RadialGradiantColorMask, SolidFillColorMask, SquareGradiantColorMask
from qrcode.image.svg import SvgImage
import io
import base64
from PIL import ImageColor

from qrcode.image.styles.moduledrawers import RoundedModuleDrawer, SquareModuleDrawer, GappedSquareModuleDrawer, \
    CircleModuleDrawer, VerticalBarsDrawer, HorizontalBarsDrawer


def gen(text: str, background: str, foreground: str, drawer: str, preset: str):
    stream = io.BytesIO()

    drawer_type = SquareModuleDrawer()

    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=1,
    )
# TODO: решить проблему с задержкой цветов
    qr.add_data(text)

    background_rgb = ImageColor.getcolor(background, 'RGB')
    foreground_rgb = ImageColor.getcolor(foreground, 'RGB')

    if drawer == 'square':
        drawer_type = SquareModuleDrawer()
    if drawer == 'gapped':
        drawer_type = GappedSquareModuleDrawer(size_ratio=0.8)
    if drawer == 'circle':
        drawer_type = CircleModuleDrawer()
    if drawer == 'round':
        drawer_type = RoundedModuleDrawer(radius_ratio=1)
    if drawer == 'vertical':
        drawer_type = VerticalBarsDrawer(horizontal_shrink=0.8)
    if drawer == 'horizontal':
        drawer_type = HorizontalBarsDrawer(vertical_shrink=0.8)

    result = qr.make_image(image_factory=StyledPilImage,
                           color_mask=SolidFillColorMask(back_color=background_rgb, front_color=foreground_rgb),
                           module_drawer=drawer_type)

    if preset == 'facebook':
        result = qr.make_image(image_factory=StyledPilImage,
                               color_mask=SolidFillColorMask(back_color=(255, 255, 255), front_color=(59,89,152)),
                               embeded_image_path="facebook.png",
                               module_drawer=drawer_type,
                               )
    if preset == 'instagram':
        result = qr.make_image(image_factory=StyledPilImage,
                               color_mask=RadialGradiantColorMask((255, 255, 255), (245, 96, 64), (131, 58, 180)),
                               embeded_image_path="instagram.png",
                               module_drawer=drawer_type,
                               )
    if preset == 'youtube':
        result = qr.make_image(image_factory=StyledPilImage,
                               color_mask=SolidFillColorMask((255, 255, 255), (204, 0, 0)),
                               embeded_image_path="youtube.png",
                               module_drawer=drawer_type,
                               )
    if preset == 'tictok':
        result = qr.make_image(image_factory=StyledPilImage,
                               color_mask=SquareGradiantColorMask((255, 255, 255), (37, 244, 238), (254, 44, 85)),
                               embeded_image_path="tictok.png",
                               module_drawer=drawer_type,
                               )
    if preset == 'twitter':
        result = qr.make_image(image_factory=StyledPilImage,
                               color_mask=SolidFillColorMask((255, 255, 255), (29, 161, 242)),
                               embeded_image_path="twitter.png",
                               module_drawer=drawer_type,
                               )
    if preset == 'telegram':
        result = qr.make_image(image_factory=StyledPilImage,
                               color_mask=SolidFillColorMask((255, 255, 255), (34, 158, 217)),
                               embeded_image_path="telegram.png",
                               module_drawer=drawer_type,
                               )

    result.save(stream=stream)

    base64_image = base64.b64encode(stream.getvalue()).decode()

    return f'data:image/png;base64,{base64_image}'
