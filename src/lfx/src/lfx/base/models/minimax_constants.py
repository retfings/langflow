from .model_metadata import create_model_metadata

MINIMAX_MODELS_DETAILED = [
    create_model_metadata(
        provider="MiniMax",
        name="MiniMax-M2.7-highspeed",
        icon="MiniMax",
        tool_calling=False,
    ),
    create_model_metadata(
        provider="MiniMax",
        name="MiniMax-M2.7",
        icon="MiniMax",
        tool_calling=False,
    ),
]

MINIMAX_MODELS = [metadata["name"] for metadata in MINIMAX_MODELS_DETAILED]
