import Dog from './dog.svg'
import ChinaFlag from './china-flag.svg'
import Congrats from './congrats.svg'
import PartyingFace from './partying-face.svg'
import itaFlag from './flag-italy.png'

const components = {
  dog: Dog,
  chinaFlag: ChinaFlag,
  congrats: Congrats,
  partyingFace: PartyingFace,
  itaFlag: itaFlag,
}

const Emoji = ({ kind }: { kind: string }) => {
  const EmojiSvg = components[kind]

  return (
    <i className={`inline-block`}>
      <EmojiSvg className={`h-4 w-4`} />
    </i>
  )
}

export default Emoji
